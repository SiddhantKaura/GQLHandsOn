const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { readFileSync } = require("fs");
const path = require("path");
const gql = require("graphql-tag");
const resolvers = require("./resolvers");
const initDataSources = require("./datasources");

const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "./schema.graphql"), {
    encoding: "utf-8",
  }),
);

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      //   Cache is useful as it allows the RestDataSource to cache results in server memory.
      const { cache } = server;
      return { dataSources: initDataSources(cache) };
    },
  });
  console.log(`
      🚀  Server is running
      📭  Query at ${url}
    `);
}

startApolloServer();
