// characterResolvers.js
const Character = require('../models/Character');

const characterResolvers = {
  Query: {
    characters: async () => {
      return await character.find();
    },
    character: async (_, { id }) => {
      return await Character.findById(id);
    },
  },
  Mutation: {
    createCharacter: async (_, { name, bounty,group,devilfruit }) => {
      const character = new Character({ name, bounty,group,devilfruit });
      await character.save();
      return character;
    },
    updateCharacter: async (_, { id, name, bounty,group,devilfruit }) => {
      return await Character.findByIdAndUpdate(id, { name, bounty,group,devilfruit }, { new: true });
    },
    deleteCharacter: async (_, { id }) => {
      return await Character.findByIdAndDelete(id);
    },
  },
};

module.exports = characterResolvers;
