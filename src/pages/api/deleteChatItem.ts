import {NextApiRequest, NextApiResponse} from "next"
import nc from 'next-connect'
import {ChatItem, PrismaClient} from '@prisma/client'

import {findUserAllDataType} from "@/libs/type"

const handler = nc<NextApiRequest, NextApiResponse>()

const prisma = new PrismaClient()

const deleteUniqueChatItem = async (req: NextApiRequest, res: NextApiResponse) => {
  const {api_key, item_uuid} = req.body

  try {
    let chatItem: ChatItem | null = await prisma.chatItem.findUnique({
      where: {item_uuid}
    })

    if (!chatItem) {
      return res.status(404).json({message: 'ChatItem not found.'})
    }

    await prisma.$transaction([
      prisma.chatMessage.deleteMany({
        where: {
          chat_id: chatItem.id
        }
      }),
      prisma.chatItem.delete({
        where: {
          item_uuid: item_uuid,
        }
      })
    ])

    // Find the user by api_key in order to satisfy the type => findUserType
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

    return res.status(200).json({message: 'Chat item deleted.', data})
  } catch (e) {
    return res.status(500).json({message: 'Error connecting to Server.', error: e})
  }

}

handler.post(deleteUniqueChatItem)

export default handler
