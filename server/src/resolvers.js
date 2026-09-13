const resolvers = {
  Query: {
    tracks: (_parent, _args, contextValue, _info) => {
      const { dataSources } = contextValue;
      return dataSources.trackApi.getTracksForHome();
    },
  },
  Track: {
    author: (parent, _args, contextValue, _info) => {
      const { authorId } = parent;
      const { dataSources } = contextValue;
      return dataSources.trackApi.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
