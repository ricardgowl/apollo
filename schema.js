const { gql } = require('apollo-server');
module.exports = gql`
type Query {
    sessions(
    id: ID
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: Room
    day: String
    format: String
    track: String
    level: String
    ): [Session],
    sessionById(id: ID): SessionOrError
    speakers: [Speaker]
    speakerById(id: ID): SpeakerOrError
}
    union SessionOrError = Session | Error
    union SpeakerOrError = Speaker | Error

    type Error {
        message: String
        code: String
        token: String
    }

enum Room {
    SOL
    SATURN
    EUROPA
}

type Mutation {
    toggleFavoriteSession(id: ID!): Session
    addNewSession(session: SessionInput!): Session
}

type Speaker {
    id: ID!,
    bio: String
    name: String
    sessions: [Session]
}

input SessionInput {
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
    favorite: Boolean
}

type Session {
    id: ID!,
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    level: String
    favorite: Boolean
    speakers: [Speaker]
}`
