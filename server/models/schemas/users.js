// import { findAllUser } from "../model/users";

const { GraphQLError } = require("graphql");
const { findAllUser, addUser, getCollection } = require("../models/users");
const { comparePassword } = require("../bcrypt");
const { verifyToken } = require("../jwt");

const typeDefs = `#graphql

type User {
    _id : ID
    name: String!
    imageUrl: String
    email: String!
    password: String
    role: String
    status: String!

}

input RegisterInput {
  name: String!
  email: String!
  password: String!
  status: String!
  imageUrl: String
}

type LoginOutput {
  token: String
}

type Query {
  getAllUsers: [User]

}

type Mutation {
  Register(payload: RegisterInput ): User
  Login(email: String!, password: String!): LoginOutput
}


`;

const resolvers = {
  Query: {
    getAllUsers: async () => {
      const users = await findAllUser();

      return users;
    },
  },

  Mutation: {
    Register: async (_parents, args) => {
      const { payload } = args;
      const { name, email, password, status, imageUrl } = payload;

      if (!name) {
        throw new GraphQLError("Name is required", {
          extensions: {
            code: "Bad Request",
            http: { status: 400 },
          },
        });
      }

      if (!email) {
        throw new GraphQLError("Email is required", {
          extensions: {
            code: "Bad Request",
            http: { status: 400 },
          },
        });
      }

      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(
        email
      );

      if (regex === false) {
        throw new GraphQLError("Email address is not valid", {
          extensions: {
            code: "Bad Request",
            http: { status: 400 },
          },
        });
      }

      if (!password) {
        throw new GraphQLError("Password is required", {
          extensions: {
            code: "Bad Request",
            http: { status: 400 },
          },
        });
      } else if (password.length < 5) {
        throw new GraphQLError("Password must contanit at least 5 character", {
          extensions: {
            code: "Bad Request",
            http: { status: 400 },
          },
        });
      }

      const duplicateMail = await getCollection().findOne({ email });
      if (duplicateMail) {
        throw new GraphQLError("Email has been taken", {
          extensions: {
            code: "Bad Request",
            http: { status: 400 },
          },
        });
      }

      if (!status) {
        throw new GraphQLError("Password is required", {
          extensions: {
            code: "Bad Request",
            http: { status: 400 },
          },
        });
      }

      const newUser = await addUser(payload);

      return newUser;
    },

    Login: async (_parents, args) => {
      const { email, password } = args;

      const users = await getCollection().findOne({ email });

      if (!users) {
        throw new GraphQLError("Invalid email/password", {
          extensions: {
            code: "Unauthorized",
            http: { status: 401 },
          },
        });
      }

      const isValidPassword = comparePassword(password, users.password);

      if (!isValidPassword) {
        throw new GraphQLError("Invalid usernmae/password", {
          extensions: {
            code: "Unauthorized",
            http: { status: 401 },
          },
        });
      }

      const payload = {
        id: users._id,
        email: users.email,
      };

      const token = verifyToken(payload);

      return { token };
    },
  },
};

module.exports = {
  userTypeDefs: typeDefs,
  userResolvers: resolvers,
};
