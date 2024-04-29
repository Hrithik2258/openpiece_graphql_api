// index.js
const { mergeResolvers } = require('@graphql-tools/merge');

const swordResolvers = require('./swordResolvers');
const arcResolvers = require('./arcResolvers');
const characterResolvers = require('./characterResolvers');

const mergedResolvers = mergeResolvers([ arcResolvers,swordResolvers,characterResolvers]);

module.exports = mergedResolvers;
