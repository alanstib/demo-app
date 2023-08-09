import { ApolloError, NetworkStatus } from "@apollo/client";
import { typedKeys } from "utils/typescript";

/**
 * @param {NetworkStatus} networkStatus - the `networkStatus` returned from the `@apollo/client` hook
 *
 * When `notifyOnNetworkStatusChange` is set to true on the config of an `@apollo/client` hook, the `networkStatus` will be updated
 * We want to use it, rather than `loading` because `loading` is only true on the first load, and not on subsequent refetches.
 */

const getApolloStatuses = (
  networkStatus: NetworkStatus,
  isLoading: boolean,
  apolloError: ApolloError | undefined,
) => {
  const loading =
    isLoading ||
    networkStatus === NetworkStatus.loading ||
    networkStatus === NetworkStatus.refetch;

  const areActionsDisabled =
    networkStatus === NetworkStatus.loading ||
    networkStatus === NetworkStatus.error ||
    networkStatus === NetworkStatus.refetch;

  const error = apolloError !== undefined || networkStatus === NetworkStatus.error;

  const isFetchingMore = networkStatus === NetworkStatus.fetchMore;

  return { loading, error, areActionsDisabled, isFetchingMore };
};

const createAuthorizationHeader = (sessionToken?: string) =>
  sessionToken ? `Bearer ${sessionToken}` : undefined;

const persistenceMapper = async (data: any) => {
  const parsed = JSON.parse(data);

  const mapped: any = {};
  const persistEntities: any[] = [];
  const { ROOT_QUERY: rootQuery, ...rest } = parsed;

  mapped.ROOT_QUERY = Object.keys(rootQuery).reduce(
    (obj: any, key: string) => {
      if (key === "__typename") {
        return obj;
      }

      if (/@persist$/.test(key)) {
        obj[key] = rootQuery[key];

        if (Array.isArray(rootQuery[key])) {
          const entities = rootQuery[key].map((item: any) => item.__ref);

          persistEntities.push(...entities);
        } else {
          const entity = rootQuery[key].__ref;

          persistEntities.push(entity);
        }
      }

      return obj;
    },
    { __typename: "Query" },
  );
  // The above is the default implementation of persistenceMapper
  // https://github.com/apollographql/apollo-cache-persist/blob/master/examples/react-native/src/utils/persistence/persistenceMapper.ts

  // Cache the values of specific references of nested queries
  typedKeys(rest).forEach((normalizedUid) => {
    const value = rest[normalizedUid];

    if (value?.__typename === "Card") {
      mapped[normalizedUid] = value;
    }
  });

  persistEntities.reduce((obj, key) => {
    obj[key] = parsed[key];
    return obj;
  }, mapped);

  return JSON.stringify(mapped);
};

export { getApolloStatuses, createAuthorizationHeader, persistenceMapper };
