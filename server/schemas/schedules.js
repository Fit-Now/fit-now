

const typeDefs = `#graphql

type Schedule {
    _id: ID
    name: String
    range: Number
    decription: String
    CoachId: [Coach]
}
`