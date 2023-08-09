import { ImageRequireSource } from "react-native/types";

const Images = {
  ["background-strand-alpha"]:
    require("./files/background-strand-alpha.png") as ImageRequireSource,
  ["background-strand-charlie"]:
    require("./files/background-strand-alpha.png") as ImageRequireSource,
  ["wordmark"]: require("./files/wordmark.png") as ImageRequireSource,
  ["logo-with-wordmark"]: require("./files/logo-with-wordmark.png") as ImageRequireSource,
  ["background-strand-beta"]:
    require("./files/background-strand-beta.png") as ImageRequireSource,
  ["dessert"]: require("./files/dessert.png") as ImageRequireSource,
  ["steak"]: require("./files/steak.png") as ImageRequireSource,
  ["champagne"]: require("./files/champagne.png") as ImageRequireSource,
  ["pink-glass"]: require("./files/pink-glass.png") as ImageRequireSource,
  ["teal-glass"]: require("./files/teal-glass.png") as ImageRequireSource,
};

type ImageName = keyof typeof Images;

export { Images };
export type { ImageName };
