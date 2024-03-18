const { findAllSchedules } = require("../models/schedules")


const typeDefs = `#graphql

type Schedule {
    _id: ID
    name: String
    range: String
    decription: String
    startDate: String
    endDate: String
}

type Query {
    getAllSchedules: [Schedule]
}

input ScheduleInput {
    name: String
    range: String
}

type Mutation {
    AddSchedules(payload: ScheduleInput): Schedule
}

`

const resolvers = {
    Query: {
        getAllSchedules: async () => {
            const schedules = await findAllSchedules()

            return schedules
        }
    }
}

module.exports = {
    SchdulesTypeDefs: typeDefs,
    SchdulesResolvers: resolvers
}