import {NextApiRequest, NextApiResponse} from "next"
import {PrismaClient} from '@prisma/client'
import nc from 'next-connect'

import {findUserAllDataType} from "@/libs/type"

const handler = nc<NextApiRequest, NextApiResponse>()

const prisma = new PrismaClient()

const handleSavaKey = async (req: NextApiRequest, res: NextApiResponse) => {
  const {api_key} = req.body

  try {
    // Find the user by api_key
    let user: findUserAllDataType = await prisma.user.findMany({
      where: {api_key: api_key},
      include:{
        ChatItems: {
          include: {
            ChatMessage: true
          }
        }
      }
    })

    // If the user does not exist, create a new user
    if (user.length === 0) {
      let newUser = await prisma.user.create({
        data: {api_key}
      })

      // Find the user by api_key in order to satisfy the type => findUserType
      user = await prisma.user.findMany({
        where: {api_key: newUser.api_key},
        include: {
          ChatItems: {
            include: {
              ChatMessage: true
            }
          }
        }
      })
    }

    return res.status(200).json({data: user})
  } catch (e) {
    return res.status(500).json({message: 'Error connecting to Server.', e})
  }

}

handler.post(handleSavaKey)

export default handler


/**
 *  http://localhost:3000/api/key  Post
 *  Body : raw => JSON  => {"api_key": "test1"}
 *
 *  {
 *     "data": [
 *         {
 *             "id": 1,
 *             "api_key": "test1",
 *             "ChatItems": [
 *                 {
 *                     "id": 1,
 *                     "item_name": "1",
 *                     "item_uuid": "uuid_1",
 *                     "modify_date": "2023-06-14T00:00:00.000Z",
 *                     "user_id": 1,
 *                     "ChatMessage": [
 *                         {
 *                             "id": 1,
 *                             "chat_id": 1,
 *                             "message_content": "u1_item1_content1",
 *                             "is_User": true
 *                         },
 *                         {
 *                             "id": 2,
 *                             "chat_id": 1,
 *                             "message_content": "u1_item1_content2",
 *                             "is_User": false
 *                         }
 *                     ]
 *                 },
 *                 {
 *                     "id": 2,
 *                     "item_name": "2",
 *                     "item_uuid": "uuid_2",
 *                     "modify_date": "2023-06-13T00:00:00.000Z",
 *                     "user_id": 1,
 *                     "ChatMessage": [
 *                         {
 *                             "id": 3,
 *                             "chat_id": 2,
 *                             "message_content": "u1_item2_content1",
 *                             "is_User": true
 *                         },
 *                         {
 *                             "id": 4,
 *                             "chat_id": 2,
 *                             "message_content": "u1_item2_content2",
 *                             "is_User": false
 *                         },
 *                         {
 *                             "id": 5,
 *                             "chat_id": 2,
 *                             "message_content": "u1_item2_content3",
 *                             "is_User": true
 *                         },
 *                         {
 *                             "id": 6,
 *                             "chat_id": 2,
 *                             "message_content": "u1_item2_content4",
 *                             "is_User": false
 *                         }
 *                     ]
 *                 }
 *             ]
 *         }
 *     ]
 * }
 *
 */

