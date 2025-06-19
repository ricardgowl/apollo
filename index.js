const {ApolloServer} = require('apollo-server')
const SessionsAPI = require('./data_sources/sessions')

const typeDefs = require('./schema.js')

const resolvers = require('./resolvers.js')

const dataSources = () => ({
    sessionAPI: new SessionsAPI()
});

const server = new ApolloServer({typeDefs, resolvers, dataSources});


server
    .listen({port: process.env.PORT || 4000})
    .then(({url}) => {
        console.log(`graphql running at ${url}`);
    })