# next-GPT

This is a [Next.js](https://nextjs.org/) project that uses [GPT](https://openai.com/blog/openai-api/) to generate text, which is aimed at learning.

## Introduction

This project is a learning experience for me to learn Nextjs Pages Router rather than Nextjs App Router.
I am also using this project to learn how to build a project with Nextjs and Tailwindcss.
Additionally, Typescript has been incorporated into the entire project.

## Features

- [x] Website UI/UX accomplished with Tailwindcss
  - [x] Website components (Menu, Chat, etc.) 
  - [x] Dark mode and Light mode
  - [x] Mobile support
  - [x] i18n Internationalization
  - [x] Home page animation

- [x] GPT-3 API integration

- [x] Database integration
  - [x] MySQL
  - [ ] PostgreSQL

- [ ] Login authentication


## Run

- Get the repository code

```
git clone git@github.com:lesenelir/next-gpt.git
```

- Installing dependencies

```
npm i
```

- Create a `.env` file in the root directory and add the following

> If you don't have an OpenAI API key, you can get one [here](https://platform.openai.com/account/api-keys).

```
OPENAI_API_KEY=Your_OpenAI_API_Key
```

- Run

```
npm run dev
```

## Deploy

This project is deployed on [Vercel](https://vercel.com/) and uses Vercel storage to store the relevant data.

You can also run this project in your local environment. The data will be stored in the MySQL database.

## Screenshots

- Home Page

![home page pc](https://github.com/lesenelir/next-gpt/blob/master/static/home.png)

- Chat Page
  
![chat page pc](https://github.com/lesenelir/next-gpt/blob/master/static/chat.png)

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
