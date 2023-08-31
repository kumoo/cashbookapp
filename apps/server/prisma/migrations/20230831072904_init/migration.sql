-- CreateTable
CREATE TABLE "CashBook" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "remark" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CashBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CashBookInfo" (
    "id" SERIAL NOT NULL,
    "bookId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "consumer" TEXT NOT NULL,
    "consumeTime" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "remark" TEXT,
    "consumeTypeId" INTEGER NOT NULL,
    "consumeAccountId" INTEGER NOT NULL,

    CONSTRAINT "CashBookInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsumeAccount" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "remark" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConsumeAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsumeType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "remark" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConsumeType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CashBookInfo" ADD CONSTRAINT "CashBookInfo_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "CashBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CashBookInfo" ADD CONSTRAINT "CashBookInfo_consumeAccountId_fkey" FOREIGN KEY ("consumeAccountId") REFERENCES "ConsumeAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CashBookInfo" ADD CONSTRAINT "CashBookInfo_consumeTypeId_fkey" FOREIGN KEY ("consumeTypeId") REFERENCES "ConsumeType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
