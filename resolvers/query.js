module.exports = {
    sessions: (parent, args, { dataSources }, info) => {
        return dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
        return dataSources.sessionAPI.getSessionById(id);
    },
    speakers: (parent, args, { dataSources }, info) => {
        return dataSources.speakersAPI.getSpeakers(args);
    },
    speakerById: (parent, { id }, { dataSources }, info) => {
        return dataSources.speakersAPI.getSpeakerById(id);
    }
};