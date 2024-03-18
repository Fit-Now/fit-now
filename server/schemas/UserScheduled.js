const { findAllSchedules } = require("../models/UserScheduled")


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
            const schedules = await findAllSchedules()
            return schedules
        },
        
    }
}

module.exports = {
    UserSchedulesTypeDefs: typeDefs,
    UserSchedulesResolvers: resolvers
}