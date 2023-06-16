import {GetServerSideProps} from "next"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import {useRouter} from "next/router"

import Layout from "@/pages/layout"
import Chat from "@/components/chat/Chat"

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common']))
    }
  }
}

function ChatPage() {
  const router = useRouter()
  const {id} = router.query
  console.log(router.query) // { id: '1' }

  return (
    <>
      <Layout>
        <Chat/>
      </Layout>
    </>
  )
}

export default ChatPage
