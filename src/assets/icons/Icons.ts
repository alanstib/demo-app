import { ImageRequireSource } from "react-native/types";

const Icons = {
  "arrow-down": require("./files/arrow-down.png") as ImageRequireSource,
  claims: require("./files/claims.png") as ImageRequireSource,
  "chevron-down": require("./files/chevron-down.png") as ImageRequireSource,
  "credit-card": require("./files/credit-card.png") as ImageRequireSource,
  dollar: require("./files/dollar.png") as ImageRequireSource,
  home: require("./files/home.png") as ImageRequireSource,
  membership: require("./files/membership.png") as ImageRequireSource,
  virtualCards: require("./files/virtual-cards.png") as ImageRequireSource,
  timer: require("./files/timer.png") as ImageRequireSource,
  user: require("./files/user.png") as ImageRequireSource,
  menu: require("./files/menu.png") as ImageRequireSource,
  report: require("./files/report.png") as ImageRequireSource,
  search: require("./files/search.png") as ImageRequireSource,
  x: require("./files/x.png") as ImageRequireSource,
};

type IconName = keyof typeof Icons;

export { Icons };
export type { IconName };
