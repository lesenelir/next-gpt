/*
  Warnings:

  - A unique constraint covering the columns `[item_uuid]` on the table `ChatItem` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `item_uuid` to the `ChatItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ChatItem` ADD COLUMN `item_uuid` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ChatItem_item_uuid_key` ON `ChatItem`(`item_uuid`);
