const TrackAPI = require("./track-api");

const initDataSources = (cache) => {
  return {
    trackApi: new TrackAPI({ cache }),
  };
};

module.exports = initDataSources;
