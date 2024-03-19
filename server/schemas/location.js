const { findAllLocations, addLocation } = require("../models/locations");


const typeDefs = `#graphql

type Location {
    _id : ID
    name: String
    Coachs: [Coach]
    CategoryId: ID
    Category: Category
    imageUrl: [String]
    longitude: Float
    latitude: Float
    address: String
}

input AddNewLocation{
  name: String
  CategoryId: ID
  imageUrl: [String]
  longitude: Float
  latitude: Float

}

type Query {
    getAllLocation: [Location]
}

type Mutation {
  addLocation(payload: AddNewLocation): Location
}



`;

const resolvers = {
  Query: {
    getAllLocation: async () => {
      const locations = await findAllLocations();

      return locations;
    },
  },
  Mutation: {
    addLocation: async (_parents, args) => {
      const { payload } = args;
      const locations = await addLocation(payload);

      return locations;
    },
  },

};

module.exports = {
  locationTypeDefs: typeDefs,
  locationResolvers: resolvers,
};
