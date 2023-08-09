import { HttpLink } from "@apollo/client";
import { env } from "services/env";

const httpLink = new HttpLink({
  uri: `${env.apiUrl}/graphql`,
  headers: {
    "hypercard-authorization": env.hypercardAuthorization,
    Authorization: env.authorizationToken,
  },
});

export { httpLink };
