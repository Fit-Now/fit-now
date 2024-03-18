const { getDatabase } = require("../config/mongoConnection")


const getScheduleCollection = () => {
    const db = getDatabase()
    const schedulesCollection = db.collection("Schedules")

    return schedulesCollection
}

const findAllSchedules = async () => {
    const schedules  = await getScheduleCollection().find().toArray()

    return schedules
}

module.exports = {
    getScheduleCollection,
    findAllSchedules
}