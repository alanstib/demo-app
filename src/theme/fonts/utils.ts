import {
  PPEikoFontFamily,
  PPEikoFontVariant,
  MDPrimerVariant,
  MDPrimerFontFamily,
  PPEIKO,
  MDPRIMER,
} from "./constants";

const createPPEikoFontFamily = (variant: PPEikoFontVariant): PPEikoFontFamily =>
  `${PPEIKO}-${variant}`;

const createMDPrimerFontFamily = (variant: MDPrimerVariant): MDPrimerFontFamily =>
  `${MDPRIMER}-${variant}`;

const createObjectFromArray = <
  ArrayValue extends number | "true",
  ArrayType extends ReadonlyArray<ArrayValue>,
  T,
>(
  array: ArrayType,
  values: FixedSizeArray<ArrayType["length"], T>,
) => {
  type Key = ArrayType[number];

  return array.reduce((acc, nextKey, currentIndex) => {
    acc[nextKey] = values[currentIndex];

    return acc;
  }, {} as Record<Key, T>);
};

export { createObjectFromArray, createPPEikoFontFamily, createMDPrimerFontFamily };
