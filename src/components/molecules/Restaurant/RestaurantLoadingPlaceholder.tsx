import { PlaceholderTexts } from "components/atoms";
import { Spacer, YStack } from "tamagui";
import { getSpaceValue } from "theme/utils";

const RestaurantLoadingPlaceholder = () => (
  <YStack
    backgroundColor={"$white10"}
    borderRadius={"$2"}
    padding={"$6"}
    width={"$full"}
    height={getSpaceValue(16)}
  >
    <YStack position={"absolute"} left={"$4"} bottom={"$4"} zIndex={"$2"}>
      <PlaceholderTexts.Body1 width={150} />
      <Spacer size={"$1"} />
      <PlaceholderTexts.Body2 width={100} />
    </YStack>
  </YStack>
);

export { RestaurantLoadingPlaceholder };
