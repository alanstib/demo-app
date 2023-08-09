const MDPRIMER = "MDPrimer" as const;
const MDPrimerVariants = [
  "Black",
  "Bold",
  "Light",
  "Medium",
  "Regular",
  "Semibold",
] as const;

const PPEIKO = "PPEiko" as const;
const PPEikoVariants = [
  "Black",
  "BlackItalic",
  "Bold",
  "BoldItalic",
  "ExtraLight",
  "ExtraLightItalic",
  "Heavy",
  "HeavyItalic",
  "Light",
  "LightItalic",
  "Medium",
  "MediumItalic",
  "Regular",
  "RegularItalic",
  "Thin",
  "ThinItalic",
] as const;

type PPEikoFontVariant = (typeof PPEikoVariants)[number];
type PPEikoFontFamily = `${typeof PPEIKO}-${PPEikoFontVariant}`;

type MDPrimerVariant = (typeof MDPrimerVariants)[number];
type MDPrimerFontFamily = `${typeof MDPRIMER}-${MDPrimerVariant}`;

const MDPrimerFontFamilies = MDPrimerVariants.map(
  (variant) => `${MDPRIMER}-${variant}` as MDPrimerFontFamily,
);

const PPEikoFontFamilies = PPEikoVariants.map(
  (variant) => `${PPEIKO}-${variant}` as PPEikoFontFamily,
);

const fontFamilies = [...MDPrimerFontFamilies, ...PPEikoFontFamilies];

export { PPEIKO, MDPRIMER, PPEikoFontFamilies, fontFamilies };
export type { PPEikoFontVariant, PPEikoFontFamily, MDPrimerVariant, MDPrimerFontFamily };
