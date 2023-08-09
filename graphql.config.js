const { config: setupEnv } = require("dotenv");

// load .env config to process.env
setupEnv();

const config = {
  schema: {
    [`${process.env.API_URL}/graphql`]: {
      headers: {
        "introspection-key": process.env.INTERNAL_SECRET,
        "hypercard-authorization": process.env.HYPERCARD_AUTHORIZATION,
      },
    },
  },
  documents: ["./src/**/*.graphql"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "src/services/graphql/generated/index.ts": {
      hooks: {
        afterOneFileWrite: ["prettier --write"],
      },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "fragment-matcher",
      ],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

module.exports = config;
