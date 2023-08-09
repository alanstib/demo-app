import { StyleSheet } from "react-native";
import { Spacer, YStack } from "tamagui";
import { getSpaceValue } from "theme/utils";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Body1, Body2, RemoteImage, Touchable } from "components/atoms";
import { LinearGradientPoint } from "expo-linear-gradient";

// Gradient props
const start: LinearGradientPoint = [1, 1];
const end: LinearGradientPoint = [1, 0];
const colors = ["$black", "$black0"];

const styles = StyleSheet.create({
  restaurantImage: {
    width: "100%",
    borderRadius: 2,
  },
});

type RestaurantProps = {
  imageUri: string;
  title: string;
  subtitle: string;
  onPress: () => void;
};

const Restaurant = ({ imageUri, title, subtitle, onPress }: RestaurantProps) => (
  <Touchable width={"$full"} height={getSpaceValue(16)} onPress={onPress}>
    <RemoteImage
      resizeMode={"cover"}
      uri={imageUri}
      width={0}
      style={styles.restaurantImage}
      height={getSpaceValue(16)}
    />
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      width={"$full"}
      height={"$full"}
      position={"absolute"}
      zIndex={"$1"}
    />
    <YStack position={"absolute"} left={"$4"} bottom={"$4"} zIndex={"$2"}>
      <Body1 color={"$white"}>{title}</Body1>
      <Spacer size={"$1"} />
      <Body2 color={"$white50"}>{subtitle}</Body2>
    </YStack>
  </Touchable>
);

export { Restaurant };
