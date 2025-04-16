/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('point', 'percentage');

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "User" (
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

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Referral" (
    "ref_id" SERIAL NOT NULL,
    "referrer_id" INTEGER NOT NULL,
    "referred_id" INTEGER,
    "referral_code" TEXT,
    "reward_id" INTEGER,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("ref_id")
);

-- CreateTable
CREATE TABLE "Voucher" (
    "voucher_id" SERIAL NOT NULL,
    "voucher_code" TEXT,
    "user_id" INTEGER NOT NULL,
    "discount_id" INTEGER NOT NULL,
    "is_redeemed" BOOLEAN NOT NULL DEFAULT false,
    "redeemed_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Voucher_pkey" PRIMARY KEY ("voucher_id")
);

-- CreateTable
CREATE TABLE "Discount" (
    "discount_id" SERIAL NOT NULL,
    "store_id" INTEGER,
    "product_id" INTEGER,
    "thumbnail" TEXT,
    "discount_code" TEXT NOT NULL,
    "discount_type" "Type" NOT NULL,
    "discount_value" INTEGER NOT NULL,
    "minimum_order" INTEGER,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userUser_id" INTEGER,

    CONSTRAINT "Discount_pkey" PRIMARY KEY ("discount_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Referral_referral_code_key" ON "Referral"("referral_code");

-- CreateIndex
CREATE UNIQUE INDEX "Voucher_voucher_code_key" ON "Voucher"("voucher_code");

-- CreateIndex
CREATE UNIQUE INDEX "Discount_discount_code_key" ON "Discount"("discount_code");

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_referred_id_fkey" FOREIGN KEY ("referred_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_reward_id_fkey" FOREIGN KEY ("reward_id") REFERENCES "Voucher"("voucher_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Voucher" ADD CONSTRAINT "Voucher_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Voucher" ADD CONSTRAINT "Voucher_discount_id_fkey" FOREIGN KEY ("discount_id") REFERENCES "Discount"("discount_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discount" ADD CONSTRAINT "Discount_userUser_id_fkey" FOREIGN KEY ("userUser_id") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
