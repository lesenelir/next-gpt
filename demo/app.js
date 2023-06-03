const API_KEY = ''

// async function fetchData() {
//   const res = await fetch('https://api.openai.com/v1/completions', {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${API_KEY}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       model: 'text-davinci-003',
//       prompt: '你好世界，你是谁？',
//       max_tokens: 100,
//     })
//   })
//
//   const data = await res.json()
//   console.log(data)
// }

async function fetchData() {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo-0301',
      messages: [{
        role: 'user',
        content: 'Hello, who are you?'
      }]
    })
  })

  const data = await res.json()
  console.log(data)
}


async function getMessage() {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{role: 'user', content: 'Hello, who are you?'}],
      max_tokens: 100,
    })
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options)
    const data = await response.json()
    console.log(data)
  } catch (e) {
    console.log(e)
  }

}

fetchData()
getMessage()
