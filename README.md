# About

When using `@graphql-tools/load` to load GraphQL schema from files (`*.graphql`) that contain subgraph directives such as `@key`, `@external` ... etc, I got errors:
```
Uncaught Error: Unknown directive "@link".

Unknown directive "@key".

Unknown directive "@external".
```

# Fix

Instead of loading schema, load typedefs only. And build schema using `@apollo/subgraph`'s `buildSubgraphSchema()`.

- Use `loadTypedefsSync().map(x => x.document)` instead of `loadSchemaSync()` to get typedefs only. (`loadSchemaSync()` validates the schema as well and will fail at federation directives like `@key`)
    - `.map(x => x.document)` is impotant becusae `buildSubgraphSchema()` expects DocumentNode only.
- Use `@apollo/subgraph`'s `buildSubgraphSchema()` to build schema from typedefs.
