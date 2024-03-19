const {
  findUserScheduleById,
  findAllUserSchedules,
  AddUserSchedule,
} = require("../models/UserScheduled");

const typeDefs = `#graphql

type UserSchedule {
    _id: ID
    UserId: ID
    CoachId: ID
    ScheduleId: ID
    startDate: String
    endDate: String
    roomChatId: ID
    LocationId: ID
    CategoryId: ID
}

input AddUserSchedule {
    CoachId: ID
    ScheduleId: ID
    LocationId: ID
    duration: Int
}


type Query {
    getAllUserSchedule: [UserSchedule]
    getUserScheduleById(userScheduleId: ID): UserSchedule
}

type Mutation {
    AddNewUserSchedule(payload: AddUserSchedule): UserSchedule
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
  Mutation: {
    AddNewUserSchedule: async (_parents, args, contextValue) => {
      const {userId} = await contextValue.auth()
      const { payload } = args;
      
      payload.UserId = userId

      const newUserSchedules = await AddUserSchedule(payload);

      return newUserSchedules;
    },
  },
};

module.exports = {
  UserSchedulesTypeDefs: typeDefs,
  UserSchedulesResolvers: resolvers,
};
