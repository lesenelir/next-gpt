import {ChatItem, User, ChatMessage} from "@prisma/client"

export type findUserType = (User & {ChatItems: (ChatItem & {ChatMessage: ChatMessage[]})[]})[]
