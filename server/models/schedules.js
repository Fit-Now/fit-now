const { getDatabase } = require("../config/mongoConnection");

const getScheduleCollection = () => {
  const db = getDatabase();
  const schedulesCollection = db.collection("Schedules");

  return schedulesCollection;
};

const findAllSchedules = async () => {
  const agg = [
    {
      $lookup: {
        from: "Coachs",
        localField: "name",
        foreignField: "sport",
        as: "Coachs",
      },
    },
  ];

  const schedules = await getScheduleCollection().aggregate(agg).toArray();

  return schedules
};

const AddSchedules = async (payload) => {
  const scheduleColletion = await getScheduleCollection();
  const newSchedule = await scheduleColletion.insertOne(payload);
  const schedules = await scheduleColletion.findOne({
    _id: newSchedule.insertedId,
  });

  return schedules;
};

module.exports = {
  getScheduleCollection,
  findAllSchedules,
  AddSchedules,
};
