import nc from 'next-connect'
import {v4 as uuidv4} from "uuid"
import {NextApiRequest, NextApiResponse} from "next"
import {ChatItem, ChatMessage, PrismaClient, User} from "@prisma/client"

// import {findUserAllDataType} from "@/libs/type"

const handler = nc<NextApiRequest, NextApiResponse>()

const prisma = new PrismaClient()

const generateChatMessage = async (message: string, chat_uuid: string, chat_id: number) => {
  // send message to OpenAI API
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // TODO 该为用户的api_key
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{role: 'user', content: message}],
      max_tokens: 512,
    })
  }

  try {
    // save user message to database
    await prisma.chatMessage.create({
      data: {
        message_content: message,
        is_User: true,
        chat_uuid: chat_uuid,
        chat_id: chat_id
      }
    })

    // const response = await fetch('https://api.openai-proxy.com/v1/chat/completions', options)
    const response = await fetch('https://open.aiproxy.xyz/v1/chat/completions', options)
    const data = await response.json()
    const responseData = data?.choices[0]?.message

    // save the response message to the database
    await prisma.chatMessage.create({
      data: {
        message_content: responseData.content,
        is_User: false,
        chat_uuid: chat_uuid,
        chat_id: chat_id
      }
    })
  } catch (e) {
    console.error(e)
  }
}

const handleSendMessage = async (req: NextApiRequest, res: NextApiResponse) => {
  const {api_key, message, chat_uuid} = req.body

  try {
    let user: User | null = await prisma.user.findUnique({
      where: {api_key: api_key}
    })

    // If the user does not exist, return null
    if (!user) {
      return res.status(404).json({message: 'User not found.'})
    }

    // user exists:
    // If chat_uuid is undefined, create a new ChatItem
    // TODO
    if (!chat_uuid) {
      const createdChatItem: ChatItem = await prisma.chatItem.create({
        data: {
          item_name: 'New Chat',
          modify_date: new Date(),
          user_id: user.id,
          item_uuid: uuidv4()
        }
      })
      // Search for the newly created chatItem to get the chat_uuid
      await generateChatMessage(message, createdChatItem.item_uuid, createdChatItem.id)
      // Find all messages based on chat_uuid.
      const data: ChatMessage[] = await prisma.chatMessage.findMany({
        where: {chat_uuid: createdChatItem.item_uuid}
      })
      return res.status(200).json({data})
    }

    // user exists,
    // chat_uuid exists: In specific chat, send message to OpenAI API
    // An item_uuid represents a specific chatBox.
    // In order to establish a foreign key relationship, it is necessary to first retrieve the id of the chatItem.
    const chatItem: ChatItem | null = await prisma.chatItem.findUnique({
      where: {item_uuid: chat_uuid}
    })

    await generateChatMessage(message, chat_uuid, chatItem!.id)
    // Find all messages based on chat_uuid.
    const data: ChatMessage[] = await prisma.chatMessage.findMany({
      where: {chat_uuid: chat_uuid}
    })
    return res.status(200).json({data})
  } catch (e) {
    return res.status(500).json({message: 'Error connecting to database.', e})
  }
}

handler.post(handleSendMessage)

export default handler
