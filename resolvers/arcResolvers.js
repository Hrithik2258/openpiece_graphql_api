// arcResolvers.js
const Arc = require('../models/Arc');

const arcResolvers = {
  Query: {
    arcs: async () => {
      return await arc.find();
    },
    arc: async (_, { id }) => {
      return await Arc.findById(id);
    },
  },
  Mutation: {
    createArc: async (_, { name, mainvillan }) => {
      const arc = new Arc({ name, mainvillan });
      await arc.save();
      return arc;
    },
    updateArc: async (_, { id, name, mainvillan }) => {
      return await Arc.findByIdAndUpdate(id, { name, mainvillan }, { new: true });
    },
    deleteArc: async (_, { id }) => {
      return await Arc.findByIdAndDelete(id);
    },
  },
};

module.exports = arcResolvers;
