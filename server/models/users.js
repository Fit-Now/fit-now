const { ObjectId } = require("bson");
const { getDatabase } = require("../config/mongoConnection");
const { hashPassword } = require("../utils/bcrypt");

const getCollection = () => {
  const db = getDatabase();
  const userCollection = db.collection("Users");

  return userCollection;
};

const findAllUser = async () => {
  const users = await getCollection().find().toArray();

  return users;
};

const addUser = async (payload) => {
  payload.password = hashPassword(payload.password);
  payload.role = "Trainee";
  payload.imageUrl =
    "https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png";

  const userCollection = await getCollection();
  const newUsers = await userCollection.insertOne(payload);
  const users = await userCollection.findOne(
    {
      _id: newUsers.insertedId,
    },
    {
      projection: {
        password: 0,
      },
    }
  );

  return users;
};

const addCoach = async (payload) => {
  payload.password = hashPassword(payload.password);
  payload.role = "Coach";
  payload.imageUrl =
    "https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png";

  const userCollection = await getCollection();
  const newUsers = await userCollection.insertOne(payload);
  const users = await userCollection.findOne(
    {
      _id: newUsers.insertedId,
    },
    {
      projection: {
        password: 0,
      },
    }
  );

  return users;
};

const searchUserByName = async (name) => {
  let regex = new RegExp(name);

  const users = await getCollection()
    .find(
      {
        name: { $regex: regex },
      },
      {
        projection: {
          password: 0,
        },
      }
    )
    .toArray();

  return users;
};

const getOneUserById = async (userId) => {
  const agg = [
    {
      $match: {
        _id: new ObjectId(userId),
      },
    },
    {
      $lookup: {
        from: "Coachs",
        localField: "coachId",
        foreignField: "_id",
        as: "Coach",
      },
    },
  ];

  const users = await getCollection().aggregate(agg).toArray();

  return users[0];
};

const findAllUserCoach = async () => {

  const users = await getCollection().find({
    role: "Coach"
  }).toArray();

  return users
}

module.exports = {
  findAllUser,
  addUser,
  getCollection,
  searchUserByName,
  getOneUserById,
  addCoach,
  findAllUserCoach
};
