export default {
  name: "hypercard-demo-app",
  slug: "hypercard-demo-app",
  version: "0.0.1",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    backgroundColor: "#000000",
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/c2e94eda-ee90-466f-86ed-136cdbfa6e0e",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "fakeco.test.demoapp",
  },
  android: {
    package: "fakeco.test.demoapp",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#000000",
    },
  },
  updates: {
    url: "https://u.expo.dev/c2e94eda-ee90-466f-86ed-136cdbfa6e0e",
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
  plugins: [
    [
      "expo-build-properties",
      {
        ios: {
          flipper: true,
        },
      },
    ],
  ],
  extra: {
    eas: {
      projectId: "c2e94eda-ee90-466f-86ed-136cdbfa6e0e",
    },
  },
  owner: "hypercard1",
  jsEngine: "hermes",
};
