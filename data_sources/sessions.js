const { DataSource } = require('apollo-datasource');
const sessions = require('../data/sessions.json');
const _ = require('lodash');
//const fs = require('fs');
//const path = require('path');

class SessionAPI extends DataSource {
  constructor() {
    super();
    //this.sessions = null;
    this.sessions = sessions || [];
  }

  initialize(config) {
    this.context = config.context;
    // Load sessions data from the JSON file
    //const dataPath = path.join(__dirname, '../data/sessions.json');
    //const data = fs.readFileSync(dataPath, 'utf8');
    //this.sessions = JSON.parse(data);
  }

  getSessions() {
    return this.sessions;
  }

  getSessionById(id) {
    const session = _.filter(sessions, { id: parseInt(id)});
    return session[0] || null;
    //return this.sessions.find(session => session.id === id) || null;
  }
}

module.exports = SessionAPI;