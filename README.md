# `News Portal`

Web application for reading breaking news stories as they happen around the world. News Portal fetches data from [News API](https://newsapi.org)

# Getting Started

Download and install Node.js on your computer (https://nodejs.org/en/download/).

Then, open VSCODE, drag the project folder to it. Open VSCODE terminal and install dependencies (you need to do this only in the first time)

```
npm install
```

Create an account at [NewsApi](https://newsapi.org).
insert token into and rename file to env

```
env.local.example
```

Run this command in your terminal to open a local server at localhost:8080

```
npm start
```

# Built With

- [Create React App](https://create-react-app.dev/) as library to preconfigured webpack or Babel so that I can focus on the code
- [TypeScript](https://www.typescriptlang.org/docs/) as coding language to add static typing to variables and function parameters
- [Sass](https://sass-lang.com/documentation/) as CSS pre-processor to keep things organised and allows you to create style sheets faster

# Libraries Used

- [Redux ToolKit](https://redux-toolkit.js.org/)for state management to help simplify many common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire "slices" of state at once
- [React Dom Router](https://reactrouter.com/) for implementing dynamic routing
- [Eslint](https://github.com/vercel/next.js) for making code more consistent and avoiding bugs
- [Prettier](https://github.com/microsoft/TypeScript) for code formatting
- [ClassName](https://github.com/sass/dart-sass) to conditionally joining classNames together
