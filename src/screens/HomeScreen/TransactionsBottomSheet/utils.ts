import {
  TransactionSortField,
  TransactionsSortInput,
  TransactionType,
} from "services/graphql/generated";
import { getXMonthsAgoISOString } from "utils";
import {
  sortSelectionData,
  filterAndSortSelectionData,
  DEFAULT_SORTING_ID,
  SortId,
  FilterId,
  filterSelectionData,
} from "./constants";

const isSortId = (id: (typeof filterAndSortSelectionData)[number]["id"]): id is SortId =>
  sortSelectionData.find((item) => item.id === id) !== undefined;

const isFilterId = (
  id: (typeof filterAndSortSelectionData)[number]["id"],
): id is FilterId => filterSelectionData.find((item) => item.id === id) !== undefined;

const isSupportedTransactionType = (id: any): id is TransactionType =>
  id === TransactionType.Dispute;

const getTransactionsSortInputFromId = (id: SortId): TransactionsSortInput => {
  if (id === "highest") {
    return {
      ascendingDirection: false,
      field: TransactionSortField.Amount,
    };
  }

  if (id === "lowest") {
    return {
      ascendingDirection: true,
      field: TransactionSortField.Amount,
    };
  }

  if (id === "oldest") {
    return {
      ascendingDirection: true,
      field: TransactionSortField.TransactedAt,
    };
  }

  // recent
  return {
    ascendingDirection: false,
    field: TransactionSortField.TransactedAt,
  };
};

const getTransactionsSort = (listItems: typeof filterAndSortSelectionData) => {
  const maybeSelectedSortId = listItems.find(
    (item) => item.isSelected && isSortId(item.id),
  )?.id as SortId | undefined;

  return maybeSelectedSortId
    ? getTransactionsSortInputFromId(maybeSelectedSortId)
    : getTransactionsSortInputFromId(DEFAULT_SORTING_ID);
};

const getTransactionsFilterType = (listItems: typeof filterAndSortSelectionData) => {
  const maybeSupportedTransactionType = listItems.find(
    (item) => item.isSelected && isSupportedTransactionType(item.id),
  )?.id as TransactionType | undefined;

  if (maybeSupportedTransactionType) {
    return [maybeSupportedTransactionType];
  }

  return undefined;
};

const getTransactionsTransactedAfter = (listItems: typeof filterAndSortSelectionData) => {
  const maybeTransactedAfter = listItems.find(
    (item) => item.id === "last-12-months" && item.isSelected,
  );

  return maybeTransactedAfter ? getXMonthsAgoISOString(12) : undefined;
};

export {
  getTransactionsSort,
  getTransactionsFilterType,
  getTransactionsTransactedAfter,
  isSortId,
  isFilterId,
};
