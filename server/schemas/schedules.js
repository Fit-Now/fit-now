const { findAllSchedules, AddSchedules } = require("../models/schedules")


const typeDefs = `#graphql

type Schedule {
    _id: ID
    name: String
    duration: Int
    decription: String
    Coachs: [Coach]
    CategoryId:  ID
}

type Query {
    getAllSchedules: [Schedule]
}

input ScheduleInput {
    name: String
    duration: Int
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