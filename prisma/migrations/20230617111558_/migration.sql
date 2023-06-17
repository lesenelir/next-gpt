/*
  Warnings:

  - You are about to drop the column `chat_id` on the `ChatMessage` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[hash_token]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chat_uuid` to the `ChatMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hash_token` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ChatMessage` DROP FOREIGN KEY `ChatMessage_chat_id_fkey`;

-- AlterTable
ALTER TABLE `ChatMessage` DROP COLUMN `chat_id`,
    ADD COLUMN `chat_uuid` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `hash_token` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_hash_token_key` ON `User`(`hash_token`);

-- AddForeignKey
ALTER TABLE `ChatMessage` ADD CONSTRAINT `ChatMessage_chat_uuid_fkey` FOREIGN KEY (`chat_uuid`) REFERENCES `ChatItem`(`item_uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
