import { config } from "@tamagui/config-base";
import { createTokens } from "tamagui";
import { size } from "./size";
import { space } from "./space";
import { color } from "./color";

const tokens = createTokens({
  ...config.tokens,
  size,
  space,
  color,
});

export { tokens };
