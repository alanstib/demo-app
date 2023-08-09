import { PaymentType } from "services/graphql/generated";

const CAPITAL_LETTER_REGEX = /(?=[A-Z])/;

const splitStringByCapitalLetters = (str: string) => str.split(CAPITAL_LETTER_REGEX);

const formatPaymentTypeToReadableString = (paymentType: PaymentType) =>
  splitStringByCapitalLetters(paymentType).join(" ");

export { formatPaymentTypeToReadableString };
