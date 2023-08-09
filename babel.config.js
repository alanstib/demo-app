process.env.TAMAGUI_TARGET = "native";

module.exports = function (api) {
  api.cache(() => process.env.NODE_ENV);

  const isProduction =
    process.env.NODE_ENV === "production" || process.env.BABEL_ENV === "production";

  // These get included in process.env
  const environmentVariables = [
    "API_URL",
    "ENVIRONMENT_NAME",
    "INTERNAL_SECRET",
    "HYPERCARD_AUTHORIZATION",
  ];

  let plugins = [
    [
      "@tamagui/babel-plugin",
      {
        components: ["tamagui"],
        config: "./src/theme/tamagui.config.ts",
        logTimings: true,
        disableExtraction: process.env.NODE_ENV === "development",
      },
    ],
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          atoms: ["./src/components/atoms"],
          storybook: [".storybook"],
        },
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".ts",
          ".js",
          ".json",
          ".png",
          ".svg",
        ],
      },
    ],
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    "react-native-reanimated/plugin",
  ];

  if (isProduction) {
    plugins = ["transform-remove-console", ...plugins];
  }

  return {
    presets: [["babel-preset-expo", { jsxRuntime: "automatic" }]],
    plugins,
  };
};
