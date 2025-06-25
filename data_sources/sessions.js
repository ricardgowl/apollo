const { DataSource } = require('apollo-datasource');
const sessions = require('../data/sessions.json');
const _ = require('lodash');
//const fs = require('fs');
//const path = require('path');

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
  }

  getSessions(args) {
    return _.filter(sessions, args);
  }

  getSessionById(id) {
    const session = _.filter(sessions, { id: parseInt(id) });
    return session[0];
  }

  toggleFavoriteSession(sessionId) {
    const session = _.filter(sessions, { id: parseInt(sessionId) });
    session[0].favorite = !session[0].favorite;
    return session[0];
  }

  addNewSession(session) {
    const newSession = {
      id: sessions.length + 1,
      ...session
    };
    sessions.push(newSession);
    return newSession;
  }
}

module.exports = SessionAPI;
