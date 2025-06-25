const { ApolloServer, ApolloError } = require('apollo-server')
const SessionsAPI = require('./data_sources/sessions')
const SpeakersAPI = require('./data_sources/speakers')

const typeDefs = require('./schema.js')

const resolvers = require('./resolvers.js')

const dataSources = () => ({
    sessionAPI: new SessionsAPI(),
    speakersAPI: new SpeakersAPI()
});

const server = new ApolloServer({
    typeDefs, resolvers, dataSources, debug: false, formatError: (error) => {
        console.log("Format Error: ", error);
        if (error.extensions.code === 'INTERNAL_SERVER_ERROR') {
            console.log("Creating Specific Apollo Error");
            return new ApolloError("We are having some problems. Please try again later", "SERVER_ERROR", { token: "uniqueToken" });
        }
        console.log("Creating General Apollo Error");
        return new ApolloError(error.message, error.extensions.code, { token: "uniqueToken" });
    }
});


server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
        console.log(`graphql running at ${url}`);
    })
