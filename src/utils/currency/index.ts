const FLOAT_REGEX = /[^-0-9.]/g;

const addCurrencyCode = (amount: number | string, inCents = false) =>
  inCents ? `${amount}¢` : `$${amount}`;

const getFloatFromString = (amount: string) =>
  amount === "" ? 0 : parseFloat(amount.replace(FLOAT_REGEX, ""));

const addCommas = (amount: number | string) => {
  const amountToUse = typeof amount === "string" ? Number(amount) : amount;

  return amountToUse.toLocaleString(undefined, {
    minimumFractionDigits: 0,
  });
};

const formatCurrency = (amount: number | string): string => {
  const amountToUse = typeof amount === "string" ? Number(amount) : amount;

  const isNegative = amountToUse < 0;
  const amountToUseAbsolute = Math.abs(amountToUse);

  // Convert the number to a string and add commas
  const formattedAmount = amountToUseAbsolute.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

  // Add the $ prefix and return the formatted string
  if (!isNegative) {
    return addCurrencyCode(formattedAmount);
  }

  return `-${addCurrencyCode(formattedAmount)}`;
};

const convertDollarToCents = (
  dollar: number,
  returnType: "number" | "string" = "string",
) => {
  const centValue = (dollar * 100).toFixed(2);

  if (returnType === "number") {
    return centValue;
  }

  return addCurrencyCode(centValue, true);
};

const addSpacesToAmexNumber = (numString: string): string => {
  const regex = /(\d{4})(\d{6})(\d{5})/;

  return numString.replace(regex, "$1 $2 $3");
};

export {
  formatCurrency,
  addCurrencyCode,
  addSpacesToAmexNumber,
  convertDollarToCents,
  addCommas,
  getFloatFromString,
};
