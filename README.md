
This is a Github Topic application built in ReactJs and GraphQL . The application uses the API from Github which is available at [https://github.com/](https://github.com/) The main link we will use to fetch our JSON data is [https://api.github.com/graphql](https://api.github.com/graphql) and we will fetch our data using ApolloClient.

## Configuration
First you need to add your token from github in the file `.env` and run the next script

## Available Scripts
In the project directory, you can run:

### `npm install`
This script is to install many dependecies in the project

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Runs test mode in terminal


## Dependecies

I use some dependies to connect graphql with github client, this dependencies are

```
    "@apollo/client": "^3.6.9",
    "@apollo/react-hooks": "^4.0.0",
    "@apollo/react-testing": "^4.0.0",
```
