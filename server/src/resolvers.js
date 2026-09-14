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
    module: (_parent, args, contextValue, _info) => {
      const { dataSources } = contextValue;
      const { id } = args;
      return dataSources.trackApi.getModule(id);
    },
  },
  Mutation: {
    incrementTrackViews: async (_parent, args, contextValue, _info) => {
      const { id } = args;
      const { dataSources } = contextValue;
      try {
        const updatedTrack = await dataSources.trackApi.incrementTrackViews(id);
        return {
          code: 200,
          message: "Incremented Views.",
          success: true,
          track: updatedTrack,
        };
      } catch (error) {
        return {
          code: error.extensions.response.status,
          message: error.extensions.response.body,
          success: false,
          track: null,
        };
      }
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
