const { getDatabase } = require("../config/mongoConnection");

const getCollection = () => {
  const db = getDatabase();

  const userCollection = db.collection("users");

  return userCollection;
};

const findAllUser = async () => {
  const users = await getCollection().find().toArray();

  return users;
};

module.exports = { findAllUser };
