// services/auth.service.ts
import { PrismaClient, User, Role } from "../../prisma/generated/client";
import { hashPassword, comparePassword } from "../utils/password.utils";
import {
  generateVerificationToken,
  sendVerificationEmail,
  sendPasswordResetEmail,
} from "../utils/email.utils";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export interface RegisterInput {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export const registerUser = async (input: RegisterInput): Promise<User> => {
  const { email, password, first_name, last_name, phone } = input;

  // Check if user exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await hashPassword(password);

  // Generate verification token
  const verifyToken = generateVerificationToken();

  // Create user
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      first_name,
      last_name,
      phone,
      role: Role.business,
      verify_token: verifyToken,
    },
  });

  // Send verification email
  await sendVerificationEmail(email, verifyToken);

  return user;
};

export const loginUser = async (
  input: LoginInput
): Promise<{ user: User; token: string }> => {
  const { email, password } = input;

  // Find user
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  // Check if user is deleted
  if (user.deleted_at) {
    throw new Error("Account has been deleted");
  }

  // Check password
  if (!user.password) {
    throw new Error("Password not set for this account");
  }

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: user.user_id, email: user.email, role: user.role },
    process.env.JWT_SECRET as string,
    { expiresIn: "24h" }
  );

  return { user, token };
};

export const verifyEmail = async (token: string): Promise<User> => {
  // Find user by verification token
  const user = await prisma.user.findFirst({
    where: { verify_token: token },
  });

  if (!user) {
    throw new Error("Invalid verification token");
  }

  // Update user
  const updatedUser = await prisma.user.update({
    where: { user_id: user.user_id },
    data: {
      verified: true,
      verify_token: null,
    },
  });

  return updatedUser;
};

export const forgotPassword = async (email: string): Promise<void> => {
  // Find user
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    // Don't reveal that the user doesn't exist for security reasons
    return;
  }

  // Generate reset token
  const resetToken = generateVerificationToken();

  // Update user
  await prisma.user.update({
    where: { user_id: user.user_id },
    data: {
      password_reset_token: resetToken,
    },
  });

  // Send password reset email
  await sendPasswordResetEmail(email, resetToken);
};

export const resetPassword = async (
  token: string,
  newPassword: string
): Promise<User> => {
  // Find user by reset token
  const user = await prisma.user.findFirst({
    where: { password_reset_token: token },
  });

  if (!user) {
    throw new Error("Invalid reset token");
  }

  // Hash new password
  const hashedPassword = await hashPassword(newPassword);

  // Update user
  const updatedUser = await prisma.user.update({
    where: { user_id: user.user_id },
    data: {
      password: hashedPassword,
      password_reset_token: null,
    },
  });

  return updatedUser;
};

export const googleAuth = async (googleData: {
  email: string;
  firstName?: string;
  lastName?: string;
}): Promise<{ user: User; token: string }> => {
  const { email, firstName, lastName } = googleData;

  // Check if user exists
  let user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    // Create new user
    user = await prisma.user.create({
      data: {
        email,
        first_name: firstName,
        last_name: lastName,
        is_google: true,
        verified: true,
        role: Role.business,
      },
    });
  } else if (!user.is_google) {
    // If user exists but not with Google
    throw new Error(
      "Email already in use with different authentication method"
    );
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: user.user_id, email: user.email, role: user.role },
    process.env.JWT_SECRET as string,
    { expiresIn: "24h" }
  );

  return { user, token };
};
