const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongoConnection");

const getUserScheduleCollection = () => {
  const db = getDatabase();
  const scheduleColletion = db.collection("UserSchedules");

  return scheduleColletion;
};

const findAllUserSchedules = async () => {
  const schedules = await getUserScheduleCollection().find().toArray();

  return schedules;
};

const findUserScheduleById = async (userScheduleId) => {
  const agg = [
    {
      $match: {
        _id: new ObjectId(userScheduleId),
      },
    },
    {
      $lookup: {
        from: "Users",
        localField: "UserId",
        foreignField: "_id",
        as: "User",
      },
    },
  ];

  const schedules = await getUserScheduleCollection().aggregate(agg).toArray();

  return schedules[0];
};

const AddUserSchedule = async (payload) => {
  payload.startDate = new Date()

  if(payload.schedules.duration === "30 days"){
    payload.endDate = payload.startDate.setDate(payload.startDate.getDate() + 1)

    
  }
  // payload.endDate = new Date ().add

}

module.exports = {
  getUserScheduleCollection,
  findAllUserSchedules,
  findUserScheduleById,
};