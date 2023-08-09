import {
  BasePlaceholderLine,
  PlaceholderTexts,
  ScreenSubContainer,
} from "components/atoms";
import { Placeholder, Progressive } from "rn-placeholder";
import { Spacer, XStack, YStack } from "tamagui";

const LoadingPlaceholderListItem = () => (
  <XStack paddingVertical={"$6"} width={"$full"}>
    <YStack alignSelf={"center"}>
      <BasePlaceholderLine width={24} height={24} />
    </YStack>
    <Spacer size={"$6"} />
    <YStack>
      <PlaceholderTexts.Body2 width={50} />
      <Spacer size={"$2"} />
      <PlaceholderTexts.Body3 width={90} />
    </YStack>
    <YStack flex={1} alignItems={"flex-end"} alignSelf={"flex-end"}>
      <PlaceholderTexts.Body2 width={50} />
    </YStack>
  </XStack>
);

const LoadingPlaceholder = () => (
  <Placeholder Animation={Progressive}>
    <ScreenSubContainer>
      {Array.from({ length: 5 }).map((_, index) => (
        <LoadingPlaceholderListItem key={`${index}`} />
      ))}
    </ScreenSubContainer>
  </Placeholder>
);

export { LoadingPlaceholder };
