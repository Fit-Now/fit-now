// import { findAllUser } from "../model/users";

const { findAllUser } = require("../model/users");

const typeDefs = `#graphql

type User {
    _id : ID
    name: String
    username: String!
    email: String!
    password: String

}



type Query {
    getAllUsers: [User]

}


`;

const resolvers = {
  Query: {
    getAllUsers: async () => {
      const users = await findAllUser();

      return users;
    },
  },
};

module.exports = {
  userTypeDefs: typeDefs,
  userResolvers: resolvers,
};
