import { useCallback } from "react";
import { useGetTransactionByIdQuery } from "services/graphql/generated";
import { formatUTCString, formatCurrency } from "utils";
import { getApolloStatuses } from "services/apollo";

const useTransactionById = (transactionId: number) => {
  const {
    data,
    refetch,
    loading: isLoading,
    networkStatus,
    error: apolloError,
  } = useGetTransactionByIdQuery({
    variables: {
      transactionId,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-first",
  });

  const { loading, error, areActionsDisabled } = getApolloStatuses(
    networkStatus,
    isLoading,
    apolloError,
  );

  const transactionData =
    data?.transaction?.__typename === "QueryTransactionSuccess"
      ? data.transaction.data
      : undefined;

  const hasGraphError = data?.transaction?.__typename === "BaseError";

  const categoryName =
    transactionData?.externalMerchant?.category.name ?? "Unknown Category";
  const merchantName =
    transactionData?.externalMerchant?.displayName ?? "Unknown Merchant";
  const formattedTransactionDate = transactionData?.transactedAt
    ? `${formatUTCString(transactionData.transactedAt, "MMM d yyyy")} • ${formatUTCString(
        transactionData.transactedAt,
        "hh:mma",
      )}`
    : "Unknown transaction date";
  const formattedDollars =
    transactionData?.amountInDollars !== undefined
      ? formatCurrency(transactionData.amountInDollars)
      : "Unknown amount";
  const status = transactionData?.status ?? "Unknown status";
  const last4OfCard = transactionData?.cardLast4Digits
    ? `****${transactionData.cardLast4Digits}`
    : "Unknown card number";
  const rewardDescription = transactionData?.reward?.pointsReward?.rewardDescription;
  const disputeStatus = transactionData?.dispute?.status;
  const creditIndicator = transactionData?.creditIndicator;

  return {
    loading,
    error: error || hasGraphError,
    networkStatus,
    refetch: useCallback(() => refetch(), [refetch]),
    categoryName,
    merchantName,
    formattedTransactionDate,
    formattedDollars,
    status,
    last4OfCard,
    areButtonsDisabled: areActionsDisabled,
    rewardDescription,
    disputeStatus,
    creditIndicator,
  };
};

export { useTransactionById };
