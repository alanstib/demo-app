import { useCallback, useEffect, useMemo, useState } from "react";
import { useDebounceCallback } from "@react-hook/debounce";
import {
  GetTransactionsQuery,
  GetTransactionsQueryVariables,
  useGetTransactionsLazyQuery,
} from "services/graphql/generated";
import { useBooleanState, useLayoutAnimationOnChange, usePrevious } from "utils/hooks";
import { getApolloStatuses } from "services/apollo";
import { NetworkStatus } from "@apollo/client";
import { filterAndSortSelectionData } from "../constants";
import {
  getTransactionsFilterType,
  getTransactionsSort,
  getTransactionsTransactedAfter,
} from "../utils";
import { isValidTransactionType } from "../types";
import { useFiltersAndSorts } from "./useFiltersAndSorts";

const PAGE_SIZE = 10;
const DEBOUNCE_MS = 300;
const MINIMUM_CHARACTERS_FOR_SEARCH = 3;

type TransactionResult = Extract<
  GetTransactionsQuery["transactions"],
  { __typename: "QueryTransactionsSuccess" }
>["data"]["allTransactions"][number];

const getVariables = (
  searchText: string,
  offset: number | undefined,
  listItems: typeof filterAndSortSelectionData,
): GetTransactionsQueryVariables => ({
  pageSize: PAGE_SIZE,
  merchantName: searchText,
  offset,
  sort: getTransactionsSort(listItems),
  filterType: getTransactionsFilterType(listItems),
  transactedAfter: getTransactionsTransactedAfter(listItems),
});

const useTransactionsSearchResults = () => {
  // State for the search bar
  const { toggleState: _toggleIsSearchBarVisible, state: isSearchBarVisible } =
    useBooleanState(false);

  // State for the search text
  const [searchText, setSearchText] = useState("");

  // State for the filters and sorts
  const {
    filtersAndSorts,
    selectedFilters,
    selectedFiltersAndSorts,
    handleDataTagPress,
    setSelectedFiltersAndSorts,
    areFiltersVisible,
    toggleAreFiltersVisible,
  } = useFiltersAndSorts();

  const toggleIsSearchBarVisible = useCallback(() => {
    if (areFiltersVisible) {
      toggleAreFiltersVisible();
    }

    _toggleIsSearchBarVisible();
  }, [_toggleIsSearchBarVisible, areFiltersVisible, toggleAreFiltersVisible]);

  const [
    fetchSearchResults,
    {
      data,
      error: apolloError,
      loading: isLoading,
      networkStatus,
      fetchMore,
      refetch,
      variables,
    },
  ] = useGetTransactionsLazyQuery({
    fetchPolicy: "cache-and-network",
    variables: getVariables("", undefined, filtersAndSorts),
    notifyOnNetworkStatusChange: true,
  });

  const { loading, error, isFetchingMore } = getApolloStatuses(
    networkStatus,
    isLoading,
    apolloError,
  );

  // Animate the search bar when it is shown or hidden
  useLayoutAnimationOnChange(isSearchBarVisible);

  const maybeData = useMemo(
    () =>
      data?.transactions.__typename === "QueryTransactionsSuccess"
        ? data.transactions.data
        : undefined,
    [data],
  );

  const handleFetchSearchResults = useCallback(
    (newSearchText: string) => {
      fetchSearchResults({
        variables: getVariables(newSearchText, undefined, filtersAndSorts),
      });
    },
    [fetchSearchResults, filtersAndSorts],
  );

  const debouncedFetchSearchResults = useDebounceCallback(
    handleFetchSearchResults,
    DEBOUNCE_MS,
    false,
  );

  const handleFetchMore = useCallback(() => {
    if (!maybeData?.hasMore) {
      console.log("No more to fetch.");
      return;
    }

    if (networkStatus === NetworkStatus.fetchMore) {
      console.log("Already fetching.");
      return;
    }

    fetchMore({
      variables: {
        offset: maybeData.nextPageOffset,
      },
    });
    // If the number of transactions returned is 0, then we know there are no more transactions to fetch
  }, [fetchMore, maybeData, networkStatus]);

  // If the search text is greater or equal to the minimum number of characters required for a search, then trigger a debounced query
  useEffect(() => {
    if (searchText.length >= MINIMUM_CHARACTERS_FOR_SEARCH || searchText === "") {
      debouncedFetchSearchResults(searchText);
    }
  }, [searchText, debouncedFetchSearchResults]);

  const previousFiltersAndSorts = usePrevious(filtersAndSorts);

  // Fetch transactions whenever filtersAndSorts changes
  useEffect(() => {
    if (previousFiltersAndSorts !== filtersAndSorts) {
      fetchSearchResults({
        variables: getVariables(searchText, undefined, filtersAndSorts),
      });
    }
  }, [fetchSearchResults, filtersAndSorts, previousFiltersAndSorts, searchText]);

  const allTransactions = maybeData?.allTransactions.filter(isValidTransactionType);

  return {
    // search
    isSearchBarVisible,
    toggleIsSearchBarVisible,
    searchText,
    searchTextForQuery: variables?.merchantName ?? "",

    // general query
    setSearchText,
    error:
      error ||
      data?.transactions.__typename === "BaseError" ||
      data?.transactions.__typename === "ValidationError",
    data: allTransactions ?? [],
    loading,
    refetch: useCallback(() => refetch(), [refetch]),
    fetchMore: handleFetchMore,
    isFetchingMore,

    // filters + sorts
    selectedFilters,
    selectedFiltersAndSorts,
    handleDataTagPress,
    setSelectedFiltersAndSorts,
    areFiltersVisible,
    filtersAndSorts,
    toggleAreFiltersVisible,
  };
};

export { useTransactionsSearchResults };
export type { TransactionResult };
