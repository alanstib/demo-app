import { useCallback } from "react";
import { getApolloStatuses } from "services/apollo";
import { RestaurantCity, useGetRestaurantsQuery } from "services/graphql/generated";

const useRestaurants = (restaurantCity: RestaurantCity) => {
  const {
    data,
    refetch,
    loading: isLoading,
    networkStatus,
    error: apolloError,
  } = useGetRestaurantsQuery({
    variables: { restaurantCity },
  });

  const { loading, error } = getApolloStatuses(networkStatus, isLoading, apolloError);

  const restaurants =
    data?.offers.__typename === "QueryOffersSuccess" ? data.offers.data : [];

  const hasGraphError = data?.offers.__typename === "BaseError";

  return {
    loading,
    error: error || hasGraphError,
    networkStatus,
    refetch: useCallback(() => refetch(), [refetch]),
    restaurants,
  };
};

export { useRestaurants };
