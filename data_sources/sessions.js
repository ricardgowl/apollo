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
    const session = _.filter(sessions, { id: parseInt(id)});
    return session[0];
  }
}

module.exports = SessionAPI;