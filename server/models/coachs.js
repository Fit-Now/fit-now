const { ObjectId } = require("bson");
const { getDatabase } = require("../config/mongoConnection");

const getCoachsCollection = () => {
  const db = getDatabase();
  const coachCollection = db.collection("Coachs");

  return coachCollection;
};

const findAllCoachs = async () => {
  const agg = [
    {
      $lookup: {
        from: "Users",
        localField: "_id",
        foreignField: "CoachId",
        as: "Users"
      },
    },
  ];

  const coachs = await getCoachsCollection().aggregate(agg).toArray();

  return coachs;
};

const AddNewCoachs = async (payload) => {

  const coachCollection = await getCoachsCollection();
  const newCoach = await coachCollection.insertOne(payload);
  

  const coachs = await coachCollection.findOne({
    _id: new ObjectId(newCoach.insertedId),
  });
  return coachs;
};




module.exports = { getCoachsCollection, findAllCoachs, AddNewCoachs };
