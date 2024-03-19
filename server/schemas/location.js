const { findAllLocations } = require("../models/locations");

const typeDefs = `#graphql

type Location {
    _id : ID
    name: String
    Coach: [Coach]
    CategoryId: ID
    Category: Category
    imageUrl: [Image]
}

type Image {
    imgurl : String
}

type Query {
    getAllLocation: [Location]
}


`;

const resolvers = {
  Query: {
    getAllLocation: async () => {
      const locations = await findAllLocations();

      return locations;
    },
  },
};

module.exports = {
  locationTypeDefs: typeDefs,
  locationResolvers: resolvers,
};
