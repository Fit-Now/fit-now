const { findALlCategories } = require("../models/categories");


const typeDefs = `#graphql

type Category {  
    _id : ID
    name: String
    logo: String

}

type Query {
    getAllCategory: [Category]
}

`;

const resolvers ={
    Query: {
        getAllCategory: async () => {
            const categories = await findALlCategories()
            // console.log(categories, "ini categories");
            return categories
        }
    }
}

module.exports ={
    CategoriesTypeDefs: typeDefs,
    categoriesResolvers: resolvers
}