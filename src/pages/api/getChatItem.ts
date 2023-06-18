import {NextApiRequest, NextApiResponse} from "next"
import nc from 'next-connect'
import {ChatItem, PrismaClient, User} from '@prisma/client'

const handler = nc<NextApiRequest, NextApiResponse>()

const prisma = new PrismaClient()

const getChatItem = async (req: NextApiRequest, res: NextApiResponse) => {
  const {api_key} = req.body

  try {
    const user: User | null = await prisma.user.findUnique({
      where: {api_key: api_key}
    })

    const data: ChatItem[] = await prisma.chatItem.findMany({
      where: {user_id: user!.id}
    })

    return res.status(200).json({message: 'Chat item deleted.', data})
  } catch (e) {
    return res.status(500).json({message: 'Error connecting to Server.', error: e})
  }

}

handler.post(getChatItem)

export default handler
