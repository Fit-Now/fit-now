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
        foreignField: "coachId",
        as: "Users",
      },
    },
  ];

  const coachs = await getCoachsCollection().aggregate(agg).toArray();

  return coachs;
};

module.exports = {getCoachsCollection, findAllCoachs}
