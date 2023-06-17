/*
  Warnings:

  - A unique constraint covering the columns `[chat_uuid]` on the table `ChatMessage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `ChatMessage_chat_uuid_key` ON `ChatMessage`(`chat_uuid`);
