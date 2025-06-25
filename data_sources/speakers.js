const { RESTDataSource } = require('apollo-datasource-rest');
const _ = require('lodash');

class SpeakersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000/speakers';
  }

  /*initialize(config) {
  }*/

  async getSpeakers(args) {
    const data = await this.get('');
    return data;
  }

  async getSpeakerById(id) {
    const data = await this.get(`/${id}`);
    return data;
  }
}

module.exports = SpeakersAPI;
