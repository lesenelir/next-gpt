const dataFromServer = [
  {
    "id": 1,
    "item_name": "1",
    "item_uuid": "uuid_1",
    "modify_date": "2023-06-14T00:00:00.000Z",
    "user_id": 1,
    "ChatMessage": [
      {
        "id": 1,
        "chat_id": 1,
        "message_content": "u1_item1_content1",
        "is_User": true
      },
      {
        "id": 2,
        "chat_id": 1,
        "message_content": "u1_item1_content2",
        "is_User": false
      }
    ]
  },
  {
    "id": 2,
    "item_name": "2",
    "item_uuid": "uuid_2",
    "modify_date": "2023-06-13T00:00:00.000Z",
    "user_id": 1,
    "ChatMessage": [
      {
        "id": 3,
        "chat_id": 2,
        "message_content": "u1_item2_content1",
        "is_User": true
      },
      {
        "id": 4,
        "chat_id": 2,
        "message_content": "u1_item2_content2",
        "is_User": false
      },
      {
        "id": 5,
        "chat_id": 2,
        "message_content": "u1_item2_content3",
        "is_User": true
      },
      {
        "id": 6,
        "chat_id": 2,
        "message_content": "u1_item2_content4",
        "is_User": false
      }
    ]
  }
]

/**
 * export interface IChat {
 *   id: number
 *   userId: number
 *   itemName: string
 *   itemUUID: string
 *   modifyDate: Date
 *   ChatMessage: IChatMessage[]
 * }
 *
 * export interface IChatMessage {
 *   id: number
 *   chatId: number
 *   messageContent: string
 *   isUser: boolean
 * }
 */

function underScope2Camel(dataFromServer) {
  let res = []

  for (let item of dataFromServer) {
    traversal(item)
    res.push(item)
  }
  return res

  function traversal(node) { // The node parameter is an object.
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

    node.ChatMessage && node.ChatMessage.forEach(item => {
      traversal(item)
    })
  }
}

let res = underScope2Camel(dataFromServer)
console.log(res)
