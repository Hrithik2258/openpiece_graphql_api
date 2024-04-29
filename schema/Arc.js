// swordSchema.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Arc {
    id: ID!
    name: String!
 mainvillan:String
  }

  type Query {
    arcs: [Arc]
    arc(id: ID!): Arc
  }

  type Mutation {
    createArc(name: String!, mainvillan:String): Arc
    updateArc(id: ID!, name: String, mainvillan:String): Arc
    deleteArc(id: ID!): Arc
  }
`;

module.exports = typeDefs;
