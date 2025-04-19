import { responseError } from "../helpers/responseError";
import { NextFunction, Request, Response } from "express";
import { JwtPayload, TokenExpiredError, verify } from "jsonwebtoken";
import { PrismaClient } from "../../prisma/generated/client";

const prisma = new PrismaClient();

type User = {
  id: number;
  user_id: number; // Keeping this for backward compatibility
};

declare module "express" {
  interface Request {
    user?: User;
  }
}

export class AuthMiddleware {
  verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      let token = req.headers.authorization?.replace("Bearer ", "");

      if (!token) throw "Verification Failed";

      const decoded = verify(token, process.env.SECRET_KEY!) as JwtPayload;

      // Map the token fields to what the controller expects
      req.user = {
        id: decoded.id as number,
        user_id: decoded.id as number, // Map 'id' from token to 'user_id' for the controller
      };

      next();
    } catch (error) {
      responseError(res, error);
    }
  }

  verifyExpiredToken(req: Request, res: Response, next: NextFunction) {
    try {
      let token = req.headers.authorization?.replace("Bearer ", "");

      if (!token) throw "Verification Failed";

      const user = verify(token, process.env.SECRET_KEY!) as JwtPayload;

      // Check if token is expired
      if (user.exp && Date.now() >= user.exp * 1000) {
        throw new TokenExpiredError("Token expired", new Date(user.exp * 1000));
      }

      req.user = {
        id: user.id as number,
        user_id: user.id as number,
      };
      next();
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        return res.status(401).json({ message: "Token expired" });
      } else {
        return res.status(401).json({ message: "Invalid token" });
      }
    }
  }

  checkResourceOwner(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new Error("Unauthorized");

      const resourceUserId = Number(req.params.user_id || req.body.user_id);
      const userId = req.user.user_id;

      if (isNaN(resourceUserId)) {
        throw new Error("Invalid resource ID");
      }

      if (resourceUserId !== userId) {
        throw new Error("You do not have permission to access this resource");
      }

      next();
    } catch (error) {
      responseError(res, error);
    }
  }

  checkProfileOwner(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new Error("Unauthorized");

      const profileId = Number(req.params.profile_id);
      const userId = req.user.user_id;

      if (isNaN(profileId)) {
        throw new Error("Invalid profile ID");
      }

      // Check if the profile belongs to the user
      prisma.profile
        .findUnique({
          where: { profile_id: profileId },
        })
        .then((profile) => {
          if (!profile || profile.user_id !== userId) {
            throw new Error(
              "You do not have permission to access this profile"
            );
          }
          next();
        })
        .catch((error) => {
          responseError(res, error);
        });
    } catch (error) {
      responseError(res, error);
    }
  }

  // Check if bank account belongs to the user
  checkBankAccountOwner(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new Error("Unauthorized");

      const bankAccountId = Number(req.params.id);
      const userId = req.user.user_id;

      if (isNaN(bankAccountId)) {
        throw new Error("Invalid bank account ID");
      }

      // Check if the bank account belongs to the user's profile
      prisma.bankAccount
        .findUnique({
          where: { id: bankAccountId },
          include: { profile: true },
        })
        .then((bankAccount) => {
          if (!bankAccount || bankAccount.profile.user_id !== userId) {
            throw new Error(
              "You do not have permission to access this bank account"
            );
          }
          next();
        })
        .catch((error) => {
          responseError(res, error);
        });
    } catch (error) {
      responseError(res, error);
    }
  }

  // Check if e-wallet belongs to the user
  checkEWalletOwner(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) throw new Error("Unauthorized");

      const eWalletId = Number(req.params.id);
      const userId = req.user.user_id;

      if (isNaN(eWalletId)) {
        throw new Error("Invalid e-wallet ID");
      }

      // Check if the e-wallet belongs to the user's profile
      prisma.eWallet
        .findUnique({
          where: { id: eWalletId },
          include: { profile: true },
        })
        .then((eWallet) => {
          if (!eWallet || eWallet.profile.user_id !== userId) {
            throw new Error(
              "You do not have permission to access this e-wallet"
            );
          }
          next();
        })
        .catch((error) => {
          responseError(res, error);
        });
    } catch (error) {
      responseError(res, error);
    }
  }
}
