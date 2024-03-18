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

function settingEndDate(n) {
  let endDate = new Date();
  let endDateWeek = endDate.getDate() + n;
  return new Date(endDate.setDate(endDateWeek));
}

const AddUserSchedule = async (payload) => {
  payload.startDate = new Date();
  
  if (payload.schedules.duration = 7) {
    payload.endDate = settingEndDate(7);
  } else if (payload.schedules.duration = 14) {
    payload.endDate = settingEndDate(14);
  } else if (payload.schedules.duration = 21) {
    payload.endDate = settingEndDate(21);
  }
  console.log(payload, "ini payload");
  
  const userScheduleCollection = await getUserScheduleCollection();
  const newUserSchedules = await userScheduleCollection.insertOne(payload);

  const UserSchedule = await userScheduleCollection.findOne({
    _id: newUserSchedules.insertedId,
  });

  console.log(UserSchedule, "ini userschedule");

  return UserSchedule;
};

module.exports = {
  getUserScheduleCollection,
  findAllUserSchedules,
  findUserScheduleById,
  AddUserSchedule
};
