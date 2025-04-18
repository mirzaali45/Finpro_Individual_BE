-- CreateEnum
CREATE TYPE "Role" AS ENUM ('customer', 'admin');

-- CreateTable
CREATE TABLE "user" (
    "user_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT,
    "password" TEXT,
    "phone" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "date_ob" TIMESTAMP(3),
    "avatar" TEXT,
    "is_google" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role" NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "verify_token" TEXT,
    "password_reset_token" TEXT,
    "referral_code" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "user"("phone");
