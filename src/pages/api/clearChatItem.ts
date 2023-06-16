import {NextApiRequest, NextApiResponse} from "next"
import nc from 'next-connect'
import {PrismaClient, User} from '@prisma/client'

import {findUserAllDataType} from "@/libs/type"

const handler = nc<NextApiRequest, NextApiResponse>()

const prisma = new PrismaClient()

const clearChatItem = async (req: NextApiRequest, res: NextApiResponse) => {
  const {api_key} = req.body

  try {
    // Find the user identified by api_key
    const user: User | null = await prisma.user.findUnique({
      where: {api_key}
    })

    if (!user) {
      return res.status(404).json({message: 'User not found.'})
    }

    const chatItems = await prisma.chatItem.findMany({
      where: {user_id: user.id}
    })

    for (const chatItem of chatItems) {
      await prisma.chatMessage.deleteMany({
        where: {chat_id: chatItem.id}
      })
    }

    await prisma.chatItem.deleteMany({
      where: {user_id: user.id}
    })

    const data: findUserAllDataType = await prisma.user.findMany({
      where: {api_key},
      include: {
        ChatItems: {
          include: {
            ChatMessage: true
          }
        }
      }
    })

    return res.status(200).json({message: 'All chats deleted for this user.', data})
  } catch (e) {
    return res.status(500).json({message: 'Error connecting to Server.', e})
  }
}

handler.post(clearChatItem)

export default handler



