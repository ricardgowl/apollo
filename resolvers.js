const Query = require('./resolvers/query.js');
const Session = require('./resolvers/session.js');
const Mutation = require('./resolvers/mutation.js');

module.exports = {
    Query,
    Session,
    Mutation,
    Room: {
        SOL: 'Sol',
        SATURN: 'Saturn',
        EUROPA: 'Europa'
    },
}
