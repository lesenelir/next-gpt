import {IChat, IChatMessage} from "@/libs/myContext"

export interface IDataFromServer {
  id: number
  user_id: number
  item_name: string
  item_uuid: string
  modify_date: Date
  ChatMessage: IChatMessageFromServer[]
}

export interface IChatMessageFromServer {
  id: number
  chat_id: number
  chat_uuid: string
  message_content: string
  is_User: boolean
}

export interface IChatItemFromServer {
  id: number
  user_id: number
  item_name: string
  item_uuid: string
  modify_date: Date
}

export function underScope2Camel(dataFromServer: IDataFromServer[]): IChat[] {
  let res: IChat[] = []

  for (let item of dataFromServer) {
    let newItem: IChat = {
      id: item.id,
      userId: item.user_id,
      itemName: item.item_name,
      itemUUID: item.item_uuid,
      modifyDate: item.modify_date,
      ChatMessage: item.ChatMessage.map((message: IChatMessageFromServer): IChatMessage => {
        return {
          id: message.id,
          chatId: message.chat_id,
          chatUUID: message.chat_uuid,
          messageContent: message.message_content,
          isUser: message.is_User
        }
      })
    }
    res.push(newItem)
  }
  return res
}

export function chatMessageCamel(dataFromServer: IChatMessageFromServer[]): IChatMessage[] {
  return dataFromServer.map((message: IChatMessageFromServer): IChatMessage => {
    return {
      id: message.id,
      chatId: message.chat_id,
      chatUUID: message.chat_uuid,
      messageContent: message.message_content,
      isUser: message.is_User
    }
  })
}

 export function chatItemCamel(dataFromServer: IChatItemFromServer[]): IChat[] {
  return dataFromServer.map((message: IChatItemFromServer): IChat => {
    return {
      id: message.id,
      userId: message.user_id,
      itemName: message.item_name,
      itemUUID: message.item_uuid,
      modifyDate: message.modify_date,
      ChatMessage: []
    }
  })
}

// export function underScope2Camel(dataFromServer: IDataFromServer[]) {
//   let res = []
//
//   for (let item of dataFromServer) {
//     traversal(item)
//     res.push(item)
//   }
//   return res
//
//   function traversal(node: any) { // The node parameter is an object.
//     if (!node) return
//
//     let keys = Object.keys(node)
//     for (let key of keys) {
//       let newKey
//
//       if (key === 'item_uuid') {
//         newKey = 'itemUUID'
//       } else {
//         newKey = key.replace(/_(\w)/g, (match, p1) => p1.toUpperCase())
//       }
//
//       if (key !== newKey) {
//         node[newKey] = node[key]
//         delete node[key]
//       }
//     }
//
//     node.ChatMessage && node.ChatMessage.forEach((item: any) => {
//       traversal(item)
//     })
//   }
// }
