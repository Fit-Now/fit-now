const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { mongoConnect } = require("./config/mongoConnection");
const { userTypeDefs, userResolvers } = require("./schemas/users");

const PORT = 3000;

const server = new ApolloServer({
  typeDefs: [userTypeDefs],
  resolvers: [userResolvers],
  introspection: true,
});

(async () => {
  try {
    await mongoConnect();
    const { url } = await startStandaloneServer(server, {
      listen: {
        port: PORT,
      },
      context: async ({ req, res }) => {
        //   return
        console.log("ini kata-kata");
        // auth: async () => {
        //   return await authentication(req);
        // },
      },
    });

    console.log(`Server ready at ${url}`);
  } catch (error) {
    console.log(error);
  }
})();
