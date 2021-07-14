const express = require("express");
const { ApolloServer } = require("apollo-server-express");

//Graphql
const typeDefs = require("./graphql/resolvers/squema");
const { Query } = require("./graphql/resolvers/query");

const app = express();
const server = new ApolloServer({
  //Apollo server needs type definitions and resolvers
  typeDefs,
  resolvers: {
    Query,
  },
});

server.applyMiddleware({ app });
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
