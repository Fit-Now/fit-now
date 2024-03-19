const { getDatabase } = require("../config/mongoConnection")


const getCategoryColletion = () => {
    const db = getDatabase()
    const categoriesCollection = db.collection("Categories")

    return categoriesCollection
}

const findALlCategories = async () => {

    const categories = await getCategoryColletion().find().toArray()

    return categories

}

module.exports = {
    getCategoryColletion, findALlCategories
}