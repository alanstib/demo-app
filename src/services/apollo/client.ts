import { createPersistLink } from "@muchobien/apollo-persistence-mapper";
import { ApolloClient, InMemoryCache, from, Reference } from "@apollo/client";
import { MMKVWrapper, persistCacheSync } from "apollo3-cache-persist";
import { apolloDevToolsInit } from "react-native-apollo-devtools-client";
import { MMKV } from "react-native-mmkv";
import { env } from "services/env";
import {
  retryLink,
  errorLink,
  httpLink,
  authLink,
  // TODO add more links
  // mutationErrorLink,
  // roundTripPerformanceLink,
} from "./links";
import { persistenceMapper } from "./utils";

type TransactionsResponse = {
  hasMore: boolean;
  allTransactions: Reference[];
  nextPageOffset: number;
};
type TransactionsCache = {
  hasMore: boolean;
  nextPageOffset: number;
  allTransactions: {
    [__ref: string]: Reference;
  };
};

const mmkvStorage = new MMKV({
  id: "apolloCache3",
  encryptionKey: env.mmkvEncryptionKey,
});

const cache = new InMemoryCache({
  typePolicies: {
    Cardholder: {
      keyFields: [],
    },
    Account: {
      keyFields: [],
    },
    NotificationSettings: {
      keyFields: [],
    },
    QueryTransactionsSuccess: {
      // there is no identifying type for `data`, so we mark it as a singleton
      // https://www.apollographql.com/docs/react/caching/cache-configuration/#customizing-cache-ids
      keyFields: [],
      fields: {
        data: {
          keyArgs: ["$merchantName", "$sort", "$filterType", "$transactedAfter"],
          read: (existing: TransactionsCache | undefined) =>
            existing
              ? {
                  hasMore: existing.hasMore,
                  nextPageOffset: existing.nextPageOffset,
                  allTransactions: Object.values(existing.allTransactions),
                }
              : existing,
          merge: (
            existing: TransactionsCache | undefined,
            incoming: TransactionsResponse,
          ) => {
            // For pagination of `Transactions`

            if (!existing) {
              return {
                hasMore: incoming.hasMore,
                nextPageOffset: incoming.nextPageOffset,
                allTransactions: incoming.allTransactions.reduce((acc, next) => {
                  acc[next.__ref] = next;

                  return acc;
                }, {} as TransactionsCache["allTransactions"]),
              };
            }

            let mergedData = {
              allTransactions: existing.allTransactions,
              hasMore: incoming.hasMore,
              nextPageOffset: incoming.nextPageOffset,
            };

            incoming.allTransactions.forEach((reference) => {
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              if (!mergedData.allTransactions[reference.__ref]) {
                mergedData.allTransactions = {
                  ...mergedData.allTransactions,
                  [reference.__ref]: reference,
                };
              }
            });

            return mergedData;
          },
        },
      },
    },
  },
});

persistCacheSync({
  cache,
  storage: new MMKVWrapper(mmkvStorage),
  persistenceMapper,
  trigger: "write",
  debug: __DEV__,
});

const persistLink = createPersistLink();

const client = new ApolloClient({
  cache,
  link: from([persistLink, retryLink, authLink, errorLink, httpLink]),
});

if (__DEV__) {
  apolloDevToolsInit(client);
}

export { client };
