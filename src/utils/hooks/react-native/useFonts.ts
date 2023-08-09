import { useFonts as expoUseFonts } from "expo-font";

const useFonts = () => {
  const [areFontsLoaded] = expoUseFonts({
    "MDPrimer-Black": require("../../../assets/fonts/MDPrimer-Black.otf"),
    "MDPrimer-Bold": require("../../../assets/fonts/MDPrimer-Bold.otf"),
    "MDPrimer-Light": require("../../../assets/fonts/MDPrimer-Light.otf"),
    "MDPrimer-Medium": require("../../../assets/fonts/MDPrimer-Medium.otf"),
    "MDPrimer-Regular": require("../../../assets/fonts/MDPrimer-Regular.otf"),
    "MDPrimer-Semibold": require("../../../assets/fonts/MDPrimer-Semibold.otf"),
    "PPEiko-Black": require("../../../assets/fonts/PPEiko-Black.otf"),
    "PPEiko-BlackItalic": require("../../../assets/fonts/PPEiko-BlackItalic.otf"),
    "PPEiko-Bold": require("../../../assets/fonts/PPEiko-Bold.otf"),
    "PPEiko-BoldItalic": require("../../../assets/fonts/PPEiko-BoldItalic.otf"),
    "PPEiko-ExtraLight": require("../../../assets/fonts/PPEiko-ExtraLight.otf"),
    "PPEiko-ExtraLightItalic": require("../../../assets/fonts/PPEiko-ExtraLightItalic.otf"),
    "PPEiko-Heavy": require("../../../assets/fonts/PPEiko-Heavy.otf"),
    "PPEiko-HeavyItalic": require("../../../assets/fonts/PPEiko-HeavyItalic.otf"),
    "PPEiko-Light": require("../../../assets/fonts/PPEiko-Light.otf"),
    "PPEiko-LightItalic": require("../../../assets/fonts/PPEiko-LightItalic.otf"),
    "PPEiko-Medium": require("../../../assets/fonts/PPEiko-Medium.otf"),
    "PPEiko-MediumItalic": require("../../../assets/fonts/PPEiko-MediumItalic.otf"),
    "PPEiko-Regular": require("../../../assets/fonts/PPEiko-Regular.otf"),
    "PPEiko-RegularItalic": require("../../../assets/fonts/PPEiko-RegularItalic.otf"),
    "PPEiko-Thin": require("../../../assets/fonts/PPEiko-Thin.otf"),
    "PPEiko-ThinItalic": require("../../../assets/fonts/PPEiko-ThinItalic.otf"),
  });

  return areFontsLoaded;
};

export { useFonts };
