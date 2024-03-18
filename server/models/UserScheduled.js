const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongoConnection");

const getScheduleCollection = () => {
  const db = getDatabase();
  const scheduleColletion = db.collection("UserSchedules");

  return scheduleColletion;
};

const findAllSchedules = async () => {
  const schedules = await getScheduleCollection().find().toArray();

  return schedules;
};

// const findUserScheduleById = async (userScheduleId) => {
//     const agg = [
//         {
//             $match: {
//               _id: new ObjectId(userScheduleId),
//             },
//           },
//           {
//             $lookup: {
//               from: "Coachs",
//               localField: "coachId",
//               foreignField: "_id",
//               as: "Coach",
//             },
//           },
//     ]
// }

module.exports = { getScheduleCollection, findAllSchedules };
