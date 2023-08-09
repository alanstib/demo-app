import { ApolloProvider } from "@apollo/client";
import { client } from "./client";

type ApolloProviderWithClientProps = Pick<
  Parameters<typeof ApolloProvider>[0],
  "children"
>;

const ApolloProviderWithClient = ({ children }: ApolloProviderWithClientProps) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export { ApolloProviderWithClient };
