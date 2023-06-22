import {GetServerSideProps} from "next"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"

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
  return (
    <>
      <Layout>
        <Chat/>
      </Layout>
    </>
  )
}

export default ChatPage
