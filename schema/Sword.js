// swordSchema.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Sword {
    id: ID!
    name: String!
    grade: String
    owner: String
  }

  type Query {
    swords: [Sword]
    sword(id: ID!): Sword
  }

  type Mutation {
    createSword(name: String!, grade: String, owner: String): Sword
    updateSword(id: ID!, name: String, grade: String, owner: String): Sword
    deleteSword(id: ID!): Sword
  }
`;

module.exports = typeDefs;
