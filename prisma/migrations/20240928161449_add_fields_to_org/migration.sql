/*
  Warnings:

  - Added the required column `address` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `orgs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `orgs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orgs" ADD COLUMN     "address" VARCHAR(255) NOT NULL,
ADD COLUMN     "cep" VARCHAR(11) NOT NULL,
ADD COLUMN     "city" VARCHAR(255) NOT NULL,
ADD COLUMN     "state" VARCHAR(255) NOT NULL;
