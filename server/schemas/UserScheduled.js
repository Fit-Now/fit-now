const {
  findUserScheduleById,
  findAllUserSchedules,
} = require("../models/UserScheduled");

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

input AddUserSchedule {
    UserId: ID
    CoachId: ID
    SchduleId: ID
}


type Query {
    getAllUserSchedule: [UserSchedule]
    getUserScheduleById(userScheduleId: ID): UserSchedule
}

type Mutation {
    AddUserSchedule(payload: AddUserSchedule): UserSchedule
}

`;

const resolvers = {
  Query: {
    getAllUserSchedule: async () => {
      const schedules = await findAllUserSchedules();
      return schedules;
    },
    getUserScheduleById: async (_parents, args) => {
      const schedules = await findUserScheduleById(args.userScheduleId);

      return schedules;
    },
  },
  Mutation : {
    // AddUserSchedule: async (_parents, args) => {
    //     const {payload} = args
    // }
  }
};

module.exports = {
  UserSchedulesTypeDefs: typeDefs,
  UserSchedulesResolvers: resolvers,
};
