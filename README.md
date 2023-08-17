# next-GPT

> If this project has been helpful to you, I would sincerely appreciate it if you could star it. Your small gesture would mean a lot to me and serve as a great source of encouragement, letting me know I'm on the right track. 🤩

This is a [Next.js](https://nextjs.org/) project that utilizes [GPT](https://openai.com/blog/openai-api/) for text generation, with a focus on learning and educational purposes.

## Introduction

This project serves as a valuable learning experience for me, specifically focusing on mastering Next.js Pages Router instead of Next.js App Router. Additionally, I am utilizing this project to gain proficiency in building applications with Next.js and Tailwind CSS. Furthermore, the entire project uses TypeScript to enhance code quality and maintainability.

Tech Stack: Next.js (Pages Router) + React + TypeScript + Tailwind CSS + Prisma + MySQL

![project gif](/static/project.gif)

## Features

- [x] Website UI/UX accomplished with Tailwindcss
  - [x] Website components (Menu, Chat, etc.) 
  - [x] Dark mode and Light mode
  - [x] Mobile support
  - [x] I18n Internationalization
  - [x] Home page animation
  - [x] Markdown convert to html string and styled it

- [x] GPT-3 API integration

- [x] Database integration
  - [x] MySQL
  - [x] Database tables
  - [x] Backend APIs for data persistence

- [x] ~~Login authentication~~

（ In this project, I use an OpenAI API Key as a user. ）

## Run

- Get the repository code

```
git clone git@github.com:lesenelir/next-gpt.git
```

- Installing dependencies

```
npm i
```

- Create a `.env` file in the root directory and add the following code

> If you don't have an OpenAI API key, you can get one [here](https://platform.openai.com/account/api-keys).

```
OPENAI_API_KEY=Your_OpenAI_API_Key
DATABASE_URL='mysql://root:Your_Local_MySQL_PassWord@localhost:3306/(Your_Local_Database)'
```

- Prisma Migrate

> Once you are connected to the local database, please proceed with the database migration to create tables.

```
npx prisma migrate dev
```

- Run

```
npm run dev
```

## Deploy

This project will be deployed on [Vercel](https://vercel.com/) and utilize [PlanetScale](https://planetscale.com/) to store relevant data.

You can also run this project in your local environment. The data will be stored in the local database.

## Screenshots

- Animation

![animation](/static/animation.gif)

- Home Page

![home page pc](/static/home.png)

- Chat Page
  
![chat page pc](/static/chat.png)

- Chat with code

![chat with code](/static/chat-code.png)

## Browser Support

`Chrome` is the recommended browser for local development

Modern browsers are supported, IE not supported

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                         not support                          |                       last 2 versions                        |                       last 2 versions                        |                       last 2 versions                        |                       last 2 versions                        |

## MIT License

MIT License

Copyright (c) 2023 Lesenelir <<hi@lesenelir.me>>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
