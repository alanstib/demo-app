import { createFont } from "tamagui";
import {
  createObjectFromArray,
  createPPEikoFontFamily,
  createMDPrimerFontFamily,
} from "./utils";

const fontKeys = [1, 2, 3, 4, 5, 6, 7, 8, "true"] as const;

const createFontObject = <T>(values: FixedSizeArray<(typeof fontKeys)["length"], T>) =>
  createObjectFromArray(fontKeys, values);

const size = createFontObject([12, 14, 16, 18, 24, 32, 48, 72, 18]);
const lineHeight = createFontObject([14, 18, 22, 24, 32, 40, 56, 84, 24]);
const weight = createFontObject([
  "300",
  "300",
  "300",
  "300",
  "300",
  "300",
  "300",
  "300",
  "300",
]);
const letterSpacing = createFontObject([0, 0, 0, 0, 0, 0, 0, 0, 0]);

const ppeikoFont = createFont({
  family: createPPEikoFontFamily("Regular"),
  size,
  lineHeight,
  weight,
  letterSpacing,
  face: {
    "100": {
      normal: createPPEikoFontFamily("Light"),
      italic: createPPEikoFontFamily("LightItalic"),
    },
    "200": {
      normal: createPPEikoFontFamily("Light"),
      italic: createPPEikoFontFamily("LightItalic"),
    },
    "300": {
      normal: createPPEikoFontFamily("Regular"),
      italic: createPPEikoFontFamily("RegularItalic"),
    },
    "400": {
      normal: createPPEikoFontFamily("Regular"),
      italic: createPPEikoFontFamily("RegularItalic"),
    },
    "500": {
      normal: createPPEikoFontFamily("Medium"),
      italic: createPPEikoFontFamily("MediumItalic"),
    },
    "600": {
      normal: createPPEikoFontFamily("Bold"),
      italic: createPPEikoFontFamily("BoldItalic"),
    },
    "700": {
      normal: createPPEikoFontFamily("Heavy"),
      italic: createPPEikoFontFamily("HeavyItalic"),
    },
    bold: {
      normal: createPPEikoFontFamily("Bold"),
      italic: createPPEikoFontFamily("BoldItalic"),
    },
  },
});

const mdPrimerFont = createFont({
  family: createMDPrimerFontFamily("Regular"),
  size,
  lineHeight,
  weight,
  letterSpacing,
  face: {
    "100": {
      normal: createMDPrimerFontFamily("Light"),
    },
    "200": {
      normal: createMDPrimerFontFamily("Light"),
    },
    "300": {
      normal: createMDPrimerFontFamily("Regular"),
    },
    "400": {
      normal: createMDPrimerFontFamily("Medium"),
    },
    "500": {
      normal: createMDPrimerFontFamily("Semibold"),
    },
    "600": {
      normal: createMDPrimerFontFamily("Bold"),
    },
    "700": {
      normal: createMDPrimerFontFamily("Bold"),
    },
    bold: {
      normal: createMDPrimerFontFamily("Bold"),
    },
  },
});

export { ppeikoFont, mdPrimerFont };
