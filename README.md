- Use `loadTypedefsSync().map(x => x.document)` instead of `loadSchemaSync()` to get typedefs only. (`loadSchemaSync()` validates the schema as well and will fail at federation directives like `@key`)
- Use `@apollo/subgraph`'s `buildSubgraphSchema()` to build schema from typedefs.
