import { StyleSheet } from "react-native";
import { AspectImage } from "components/atoms";
import Animated, { FadeOut } from "react-native-reanimated";
import { getColorValue } from "theme/utils";
import { Spacer } from "tamagui";
import { STARTING_WORDMARK_WIDTH } from "./constants";

const styles = StyleSheet.create({
  animatedView: {
    backgroundColor: getColorValue("black"),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const AuthenticatingUI = () => (
  <Animated.View exiting={FadeOut} style={styles.animatedView}>
    <AspectImage imageName={"logo-with-wordmark"} width={STARTING_WORDMARK_WIDTH} />
    <Spacer size={"$8"} />
  </Animated.View>
);

export { AuthenticatingUI };
