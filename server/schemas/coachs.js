const { findAllCoachs } = require("../models/coachs");


const typeDefs = `#graphql

type Coach {
    _id : ID
    name: String
    sport: String
    Users: [User]
   
  
}

type Query {
    getAllCoachs: [Coach]
}



`;

const resolvers = {
    Query : {
        getAllCoachs: async () => {
            const coachs = await findAllCoachs()
            
            console.log(coachs, "ini coachs");
            return coachs
        }
    }
}

module.exports = {
    coachTypeDefs: typeDefs,
    coachResolvers: resolvers
}