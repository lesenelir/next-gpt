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
  message_content: string
  is_User: boolean
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
          messageContent: message.message_content,
          isUser: message.is_User
        }
      })
    }
    res.push(newItem)
  }
  return res
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


