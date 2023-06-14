export interface IDataFromServer {
  id: number
  user_id: number
  item_name: string
  item_uuid: string
  modify_date: Date
  ChatMessage: IChatMessage[]
}

export interface IChatMessage {
  id: number
  chat_id: number
  message_content: string
  is_User: boolean
}

export function underScope2Camel(dataFromServer: IDataFromServer[]) {
  let res = []

  for (let item of dataFromServer) {
    traversal(item)
    res.push(item)
  }
  return res

  function traversal(node: any) { // The node parameter is an object.
    if (!node) return

    let keys = Object.keys(node)
    for (let key of keys) {
      let newKey

      if (key === 'item_uuid') {
        newKey = 'itemUUID'
      } else {
        newKey = key.replace(/_(\w)/g, (match, p1) => p1.toUpperCase())
      }

      if (key !== newKey) {
        node[newKey] = node[key]
        delete node[key]
      }
    }

    node.ChatMessage && node.ChatMessage.forEach((item: any) => {
      traversal(item)
    })
  }
}


