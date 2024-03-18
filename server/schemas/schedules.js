const { findAllSchedules, AddSchedules } = require("../models/schedules")


const typeDefs = `#graphql

type Schedule {
    _id: ID
    name: String
    duration: String
    decription: String
    Coachs: [Coach]
}

type Query {
    getAllSchedules: [Schedule]
}

input ScheduleInput {
    name: String
    duration: String
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
    },
    Mutation: {
        AddSchedules: async (_parents, args) => {
            const {payload} = args

            const newSchedule = await AddSchedules(payload)

            return newSchedule
        }
    }
}

module.exports = {
    SchdulesTypeDefs: typeDefs,
    SchdulesResolvers: resolvers
}