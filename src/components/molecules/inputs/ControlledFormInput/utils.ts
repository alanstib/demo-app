const ONLY_DIGITS_REGEX = /\D/g;
const US_COUNTRY_CODE_DIGIT = "1";
const US_COUNTRY_CODE = `+${US_COUNTRY_CODE_DIGIT}`;

const getPart1 = (maybeFirst3Digits: string) => {
  if (maybeFirst3Digits.length) {
    return `(${maybeFirst3Digits}`;
  }

  return "";
};

const getPart2 = (maybeSecond3Digits: string) => {
  if (maybeSecond3Digits.length) {
    return `) ${maybeSecond3Digits}`;
  }

  return "";
};

const getPart3 = (maybeLast4Digits: string) => {
  if (maybeLast4Digits.length) {
    return `-${maybeLast4Digits}`;
  }

  return "";
};

const getMaskedPhoneValue = (value: string) => {
  const valueWithoutCountryCode = value.replace(US_COUNTRY_CODE, "");
  let unmaskedPhone = valueWithoutCountryCode.replace(ONLY_DIGITS_REGEX, "");

  if (unmaskedPhone.length > 10 && unmaskedPhone[0] === US_COUNTRY_CODE_DIGIT) {
    unmaskedPhone = unmaskedPhone.slice(1);
  }

  const maybeFirst3Digits = unmaskedPhone.slice(0, 3);
  const maybeSecond3Digits = unmaskedPhone.slice(3, 6);
  const maybeLast4Digits = unmaskedPhone.slice(6, 10);

  const part1 = getPart1(maybeFirst3Digits);
  const part2 = getPart2(maybeSecond3Digits);
  const part3 = getPart3(maybeLast4Digits);

  return `${part1}${part2}${part3}`;
};

export { getMaskedPhoneValue };
