// swordResolvers.js
const Sword = require('../models/Sword');

const swordResolvers = {
  Query: {
    swords: async () => {
      return await Sword.find();
    },
    sword: async (_, { id }) => {
      return await Sword.findById(id);
    },
  },
  Mutation: {
    createSword: async (_, { name, grade, owner }) => {
      const sword = new Sword({ name, grade, owner });
      await sword.save();
      return sword;
    },
    updateSword: async (_, { id, name, grade, owner }) => {
      return await Sword.findByIdAndUpdate(id, { name, grade, owner }, { new: true });
    },
    deleteSword: async (_, { id }) => {
      return await Sword.findByIdAndDelete(id);
    },
  },
};

module.exports = swordResolvers;
