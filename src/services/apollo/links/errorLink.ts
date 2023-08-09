import { fromPromise } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  graphQLErrors?.forEach((error) => {
    console.log("[GraphQL errorLink]", {
      message: error.message,
      locations: error.locations,
      path: error.path,
    });
  });

  return undefined;
});

export { errorLink };
