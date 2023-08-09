import { NativeModules, LayoutAnimation, Platform } from "react-native";

if (
  Platform.OS === "android" &&
  NativeModules.UIManager.setLayoutAnimationEnabledExperimental
) {
  NativeModules.UIManager.setLayoutAnimationEnabledExperimental(true);
}

let isAnimating = false;

const resetIsAnimating = () => {
  isAnimating = false;
};

const performLayoutAnimation = (skipAnimation = false) => {
  if (isAnimating) {
    console.log(
      "%ccalling performLayoutAnimation but already have one queued up or in progress",
      "color:red",
    );

    return;
  }

  if (!skipAnimation) {
    console.log("%ccalling performLayoutAnimation", "color:yellow");

    isAnimating = true;

    LayoutAnimation.configureNext(
      LayoutAnimation.Presets.easeInEaseOut,
      resetIsAnimating,
    );
  }
};

export { performLayoutAnimation };
