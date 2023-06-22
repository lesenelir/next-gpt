import nc from 'next-connect'
import {v4 as uuidv4} from 'uuid'
import {NextApiRequest, NextApiResponse} from "next"
import {PrismaClient, User} from '@prisma/client'

import {findUserAllDataType} from "@/libs/type"

const handler = nc<NextApiRequest, NextApiResponse>()

const prisma = new PrismaClient()

const handleAddChatItem = async (req: NextApiRequest, res: NextApiResponse) => {
  const {api_key} = req.body

  try {
    let user: User | null = await prisma.user.findUnique({
      where: {api_key: api_key}
    })

    // If the user does not exist, return null
    if (!user) {
      return res.status(404).json({message: 'User not found.'})
    }

    // Create a new ChatItem
    await prisma.chatItem.create({
      data: {
        item_name: 'New Chat',
        modify_date: new Date(),
        user_id: user.id,
        item_uuid: uuidv4()
      }
    })

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

    return res.status(200).json({data})
  } catch (e) {
    return res.status(500).json({message: 'Error connecting to Server.', e})
  }

}

handler.post(handleAddChatItem)

export default handler
