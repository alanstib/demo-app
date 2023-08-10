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
    url: "https://u.expo.dev/f0bcf15e-99ea-495d-b31e-aaf28c87f21f",
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
    url: "https://u.expo.dev/f0bcf15e-99ea-495d-b31e-aaf28c87f21f",
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
      projectId: "f0bcf15e-99ea-495d-b31e-aaf28c87f21f",
    },
  },
  owner: "alanstib",
  jsEngine: "hermes",
};
