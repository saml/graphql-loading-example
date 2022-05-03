const { buildSubgraphSchema } = require("@apollo/subgraph");

const typeDefs = require('./typeDefs');
const resolvers = {
  Query: {
    query1: (parent, args, context) => {
      return {
        id: 'test-category',
        name: 'Test Category',
      }
    }
  }
};

buildSubgraphSchema({ typeDefs: typeDefs[0].document, resolvers });