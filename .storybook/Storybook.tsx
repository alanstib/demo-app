import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getStorybookUI } from "@storybook/react-native";
import { useFonts } from "utils/hooks";

import "./storybook.requires";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Storybook = getStorybookUI({
  shouldPersistSelection: __DEV__,
});

export { Storybook };
