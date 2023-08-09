import { useCallback } from "react";
import { getApolloStatuses } from "services/apollo";
import {
  OfferCategory,
  useGetOffersForMembershipQuery,
} from "services/graphql/generated";

const useOffersForMembership = (category: OfferCategory) => {
  const {
    data,
    refetch,
    loading: isLoading,
    networkStatus,
    error: apolloError,
  } = useGetOffersForMembershipQuery({
    variables: { category },
  });

  const { loading, error } = getApolloStatuses(networkStatus, isLoading, apolloError);

  const offers = data?.offers.__typename === "QueryOffersSuccess" ? data.offers.data : [];

  const hasGraphError = data?.offers.__typename === "BaseError";

  return {
    loading,
    error: error || hasGraphError,
    networkStatus,
    refetch: useCallback(() => refetch(), [refetch]),
    offers,
  };
};

export { useOffersForMembership };
