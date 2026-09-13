const { RESTDataSource } = require("@apollo/datasource-rest");

class TrackAPI extends RESTDataSource {
  constructor(options) {
    super(options);
    this.baseURL = "https://catstronauts-api.up.railway.app/";
  }

  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId) {
    return this.get(`author/${encodeURIComponent(authorId)}`);
  }
}

module.exports = TrackAPI;
