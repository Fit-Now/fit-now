const {  findUserScheduleById, findAllUserSchedules } = require("../models/UserScheduled")


const typeDefs = `#graphql

type UserSchedule {
    _id: ID
    UserId: ID
    CoachId: ID
    SchduleId: ID
    startDate: String
    endDate: String
    roomChatId: ID
    LocationId: ID
    CategoryId: ID
}


type Query {
    getAllUserSchedule: [UserSchedule]
    getUserScheduleById(userScheduleId: ID): UserSchedule
}

`

const resolvers = {
    Query: {
        getAllUserSchedule: async () => {
            const schedules = await findAllUserSchedules()
            return schedules
        },
        getUserScheduleById: async (_parents, args) => {
            const schedules = await findUserScheduleById(args.userScheduleId)

            return schedules
        }
    }
}

module.exports = {
    UserSchedulesTypeDefs: typeDefs,
    UserSchedulesResolvers: resolvers
}