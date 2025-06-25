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
    SessionOrError: {
        __resolveType: (obj) => {
            if (obj.code || (obj.extensions && obj.extensions.code)) {
                console.log("Error");
                return 'Error';
            }
            console.log("Session");
            return 'Session';
        }
    },
    SpeakerOrError: {
        __resolveType: (obj) => {
            console.log("SpeakerOrError -> Object: ", obj);
            if (obj.code || (obj.extensions && obj.extensions.code)) {
                console.log("SpeakerOrError -> Error");
                return 'Error';
            }
            console.log("SpeakerOrError -> Speaker");
            return 'Speaker';
        }
    }
}
