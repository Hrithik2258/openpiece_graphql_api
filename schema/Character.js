// swordSchema.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Character {
    id: ID!
    name: String!
group:String 
devilfruits:String
bounty:Int
  }

  type Query {
    characters: [Character]
    character(id: ID!): Character
  }

  type Mutation {
    createCharacter(name: String!,group:String ,bounty:Int,devilfruits:String): Character
    updateCharacter(id: ID!, name: String,group:String ,bounty:Int,devilfruits:String): Character
    deleteCharacter(id: ID!): Character
  }
`;

module.exports = typeDefs;
