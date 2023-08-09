import { config } from "@tamagui/config-base";
import { createAnimations } from "@tamagui/animations-reanimated";
import { createTamagui } from "tamagui";
import { ppeikoFont, mdPrimerFont } from "./fonts";
import { tokens } from "./tokens";

const { shorthands, fonts, tokens: defaultTokens, animations, ...restOfConfig } = config;

// More customizations here: https://tamagui.dev/docs/core/configuration#:~:text=one%20you%27re%20using.-,Overview,-Let%27s%20start%20with

const tamaguiConfig = createTamagui({
  ...restOfConfig,
  animations: createAnimations({
    fast: {
      type: "spring",
      damping: 20,
      mass: 1.2,
      stiffness: 250,
    },
    medium: {
      type: "spring",
      damping: 10,
      mass: 0.9,
      stiffness: 100,
    },
    slow: {
      type: "spring",
      damping: 20,
      stiffness: 60,
    },
  }),
  tokens,
  fonts: {
    heading: ppeikoFont,
    body: mdPrimerFont,
  },
});

type TamaguiConfig = typeof tamaguiConfig;

declare module "tamagui" {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `@tamagui/core`

  interface TamaguiCustomConfig extends TamaguiConfig {}
  interface ThemeValueFallback {
    value: never;
  }
}

export default tamaguiConfig;
