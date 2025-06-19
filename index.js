const {ApolloServer, gql} = require('apollo-server')
const SessionsAPI = require('./data_sources/sessions')
//const sessions = require('./data/sessions.json')

const typeDefs = gql`
type Query {
    sessions: [Session],
    sessionByID(id:ID): Session
}

type Session {
    id: ID!,
    title: String!
}`

const resolvers = {
    Query: {
        sessions: (parent, args, {dataSources}, info) => {
            return dataSources.sessionAPI.getSessions();
        },
        sessionByID: (parent, {id}, {dataSources}, info) => {
            return dataSources.sessionAPI.getSessionById(id);
        }
    }
}

const dataSources = () => ({
    sessionAPI: new SessionsAPI()
});

const server = new ApolloServer({typeDefs, resolvers, dataSources});


server
    .listen({port: process.env.PORT || 4000})
    .then(({url}) => {
        console.log(`graphql running at ${url}`);
    })