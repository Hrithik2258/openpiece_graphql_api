// index.js
const { mergeTypeDefs } = require('@graphql-tools/merge');
const swordSchema = require('./Sword');
const arcSchema = require('./Arc');
const characterSchema = require('./Character');

const mergedTypeDefs = mergeTypeDefs([arcSchema,swordSchema,characterSchema]);

module.exports = mergedTypeDefs;
