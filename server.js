const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// Your MongoDB connection URI
const uri = 'mongodb+srv://hrithikpawar1020:pawar1@cluster0.gbdx1yh.mongodb.net/';

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected');
    // Once connected, start the Apollo Server
    const server = new ApolloServer({
      typeDefs,
      resolvers
    });
    server.listen().then(({ url }) => {
      console.log(`Server ready at ${url}`);
    });
  })
  .catch(err => console.error(err));
