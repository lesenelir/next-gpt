import {NextApiRequest, NextApiResponse} from "next"
import nc from 'next-connect'
import {PrismaClient} from '@prisma/client'

import {findUserAllDataType} from "@/libs/type"

const handler = nc<NextApiRequest, NextApiResponse>()

const prisma = new PrismaClient()

const handleUpdateChatItem = async (req: NextApiRequest, res: NextApiResponse) => {
  const {api_key, item_uuid, item_name} = req.body

  try {
    // Update the item_name of the chatItem identified by item_uuid
    await prisma.chatItem.update({
      where: {item_uuid},
      data: {item_name}
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

    return res.status(200).json({message: 'Item name updated.', data})
  } catch (e) {
    return res.status(500).json({message: 'Error connecting to Server.', e})
  }

}

handler.post(handleUpdateChatItem)

export default handler





