/*
  Warnings:

  - The `status` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('INACTIVE', 'ACTIVE');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "status",
ADD COLUMN     "status" "ProductStatus" NOT NULL DEFAULT 'INACTIVE';

-- DropEnum
DROP TYPE "Statuses";
