import {NextApiRequest, NextApiResponse} from "next"
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()

const handleSendMessage = async (req: NextApiRequest, res: NextApiResponse) => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{role: 'user', content: req.body.message}],
      max_tokens: 100,
    })
  }

  try {
    const response = await fetch('https://api.openai-proxy.com/v1/chat/completions', options)
    const data = await response.json()
    return res.status(200).json({data})
  } catch (e) {
    return res.status(500).json({message: 'Error connecting to OpenAI API.', e})
  }
}

handler.post(handleSendMessage)

handler.get((req:NextApiRequest, res:NextApiResponse) => {
  return res.status(200).json({message: '/api/chat GET method request successful!'})
})

export default handler
