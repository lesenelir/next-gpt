/*
  Warnings:

  - You are about to drop the column `session_token` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_session_token_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `session_token`;
