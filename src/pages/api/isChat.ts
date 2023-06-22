import nc from 'next-connect'
import {NextApiRequest, NextApiResponse} from "next"
import {ChatMessage, PrismaClient} from '@prisma/client'

const handler = nc<NextApiRequest, NextApiResponse>()

const prisma = new PrismaClient()

const handleIsChat = async (req: NextApiRequest, res: NextApiResponse) => {
  const {chat_uuid} = req.body

  try {
    const messages: ChatMessage[] = await prisma.chatMessage.findMany({
      where: {chat_uuid: chat_uuid}
    })

    if (messages.length === 0) { // ChatMessage has no data
      return res.status(200).json({data: false})
    } else { // Dataset has data
      return res.status(200).json({data: messages})
    }

  } catch (e) {
    return res.status(500).json({message: 'Error connecting to Server.', e})
  }

}

handler.post(handleIsChat)

export default handler
