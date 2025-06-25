module.exports = {
    sessions: (parent, args, { dataSources }, info) => {
        return dataSources.sessionAPI.getSessions(args);
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
        try {
            return dataSources.sessionAPI.getSessionById(id);
        } catch (error) {
            return { message: "Error fetching session by id", code: "SESSION_API_ERROR", token: "uniqueToken" };
        }
    },
    speakers: (parent, args, { dataSources }, info) => {
        try {
            return dataSources.speakersAPI.getSpeakers(args);
        } catch (error) {
            return { message: "Error fetching speakers", code: "SPEAKERS_API_ERROR", token: "uniqueToken" };
        }
    },
    speakerById: (parent, { id }, { dataSources }, info) => {
        return dataSources.speakersAPI.getSpeakerById(id);
    }
};
