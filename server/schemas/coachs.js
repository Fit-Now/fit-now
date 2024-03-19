const { ObjectId } = require("mongodb");
const { findAllCoachs, AddNewCoachs } = require("../models/coachs");

const typeDefs = `#graphql

type Coach {
    _id : ID
    name: String
    sport: String
    Users: [User]
    locationId: ID
    email: String
    imgUrl: String

}

input AddNewCoach {
    name: String
    sport: String
    email: String
    locationId: ID
}

type Query {
    getAllCoachs: [Coach]
}

type Mutation{
    AddCoachs(payload: AddNewCoach):Coach
}

`;

const resolvers = {
  Query: {
    getAllCoachs: async () => {
      const coachs = await findAllCoachs();

    //   console.log(coachs, "ini coachs");
      return coachs;
    },
  },
  Mutation: {
    AddCoachs: async (_parents, args, contextValue) => {
      const { payload } = args;

      payload.locationId = new ObjectId(payload.locationId)

      const posts = await AddNewCoachs(payload);
      return posts;
    },
  },
};

module.exports = {
  coachTypeDefs: typeDefs,
  coachResolvers: resolvers,
};
