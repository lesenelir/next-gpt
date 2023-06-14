import {ChatItem, User, ChatMessage} from "@prisma/client"

export type findUserAllDataType = (User & {ChatItems: (ChatItem & {ChatMessage: ChatMessage[]})[]})[]
