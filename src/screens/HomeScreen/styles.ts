import { Dimensions, StyleSheet } from "react-native";
import { getDimensions } from "components/atoms";
import { getSpaceValue } from "theme/utils";

const CARD_IMAGE_WIDTH = Dimensions.get("window").width * 0.8;
const CARD_IMAGE_ASPECT_RATIO = 344 / 217;
const WINDOW_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  video: {
    position: "absolute",
    zIndex: 0,
    top: getSpaceValue(15),
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH / (16 / 9),
  },
  flipCard: getDimensions({
    width: CARD_IMAGE_WIDTH,
    aspectRatio: CARD_IMAGE_ASPECT_RATIO,
  }),
});

export { styles, CARD_IMAGE_WIDTH, CARD_IMAGE_ASPECT_RATIO };
