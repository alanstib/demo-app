import { GetTransactionsQuery } from "services/graphql/generated";

type TransactionsFromQuery = Extract<
  Required<GetTransactionsQuery["transactions"]>,
  { __typename: "QueryTransactionsSuccess" }
>;

type TransactionFromQuery = TransactionsFromQuery["data"]["allTransactions"][number];

type TransactionTypeTransactionFromQuery = Extract<
  Required<TransactionFromQuery>,
  { __typename: "Transaction" }
>;

type PaymentTransactionTypeTransactionFromQuery = Extract<
  Required<TransactionFromQuery>,
  { __typename: "PaymentTransaction" }
>;

type ListItemProps =
  | TransactionTypeTransactionFromQuery
  | PaymentTransactionTypeTransactionFromQuery;

const isPaymentTransactionType = (
  transaction:
    | TransactionTypeTransactionFromQuery
    | PaymentTransactionTypeTransactionFromQuery,
): transaction is PaymentTransactionTypeTransactionFromQuery =>
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  (transaction as PaymentTransactionTypeTransactionFromQuery).paymentStatus !== undefined;

const isValidTransactionType = (
  transaction: TransactionFromQuery | ListItemProps,
): transaction is ListItemProps => transaction.__typename !== undefined;

export { isPaymentTransactionType, isValidTransactionType };

export type {
  ListItemProps,
  TransactionTypeTransactionFromQuery,
  PaymentTransactionTypeTransactionFromQuery,
};
