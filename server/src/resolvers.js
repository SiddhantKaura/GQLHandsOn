const resolvers = {
  Query: {
    tracks: (_parent, _args, contextValue, _info) => {
      const { dataSources } = contextValue;
      return dataSources.trackApi.getTracksForHome();
    },
    track: (_parent, args, contextValue, _info) => {
      const { dataSources } = contextValue;
      const { id } = args;
      return dataSources.trackApi.getTrack(id);
    },
  },
  Track: {
    author: (parent, _args, contextValue, _info) => {
      const { authorId } = parent;
      const { dataSources } = contextValue;
      return dataSources.trackApi.getAuthor(authorId);
    },
    modules: (parent, _args, contextValue, _info) => {
      const { id } = parent;
      const { dataSources } = contextValue;
      return dataSources.trackApi.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
