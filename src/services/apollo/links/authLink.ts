import { setContext } from "@apollo/client/link/context";
import { env } from "services/env";

//  injected headers will be returned to apollo's context so httpLink can read them
const authLink = setContext(async (_request, { headers }) => ({
  headers: {
    ...headers,
    "hypercard-authorization": env.hypercardAuthorization,
    Authorization: env.authorizationToken,
  },
}));

export { authLink };
