/*
  Warnings:

  - Added the required column `chat_id` to the `ChatMessage` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ChatMessage` DROP FOREIGN KEY `ChatMessage_chat_uuid_fkey`;

-- AlterTable
ALTER TABLE `ChatMessage` ADD COLUMN `chat_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ChatMessage` ADD CONSTRAINT `ChatMessage_chat_id_fkey` FOREIGN KEY (`chat_id`) REFERENCES `ChatItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
