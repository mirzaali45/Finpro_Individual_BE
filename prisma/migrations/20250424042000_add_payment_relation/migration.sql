-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "bankAccountId" INTEGER,
ADD COLUMN     "eWalletId" INTEGER;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_eWalletId_fkey" FOREIGN KEY ("eWalletId") REFERENCES "EWallet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_bankAccountId_fkey" FOREIGN KEY ("bankAccountId") REFERENCES "BankAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;
