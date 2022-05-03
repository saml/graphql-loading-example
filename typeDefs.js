const path = require("path");

const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");

module.exports = loadSchemaSync(path.join(__dirname, "schema.subgraph.graphql"), {
  loaders: [new GraphQLFileLoader()],
});
