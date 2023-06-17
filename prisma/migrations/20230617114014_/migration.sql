/*
  Warnings:

  - You are about to drop the column `hash_token` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_hash_token_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `hash_token`;
