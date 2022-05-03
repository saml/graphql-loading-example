const path = require("path");

const { loadTypedefsSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");

module.exports = loadTypedefsSync(path.join(__dirname, "schema.subgraph.graphql"), {
  loaders: [new GraphQLFileLoader()],
});
