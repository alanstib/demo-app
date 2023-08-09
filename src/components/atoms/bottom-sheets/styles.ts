import { StyleSheet } from "react-native";
import { getColorValue } from "theme/utils";

const bottomSheetStyles = StyleSheet.create({
  handleIndicator: {
    backgroundColor: getColorValue("white30"),
    width: 40,
    height: 6,
  },
  baseBottomSheet: {
    backgroundColor: "transparent",
    marginHorizontal: 8,
  },
});

export { bottomSheetStyles };
