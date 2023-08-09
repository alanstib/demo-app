import { BasePlaceholderLine, PlaceholderTexts } from "components/atoms";
import { Spacer, YStack } from "tamagui";
import { getSpaceValue } from "theme/utils";
import { useOfferDimensions } from "./hooks";

const OfferLoadingPlaceholder = () => {
  const offerDimensions = useOfferDimensions();
  const offerDimensionsMinusPadding = offerDimensions - getSpaceValue(6) * 2;

  return (
    <YStack
      backgroundColor={"$white10"}
      borderRadius={"$2"}
      padding={"$6"}
      width={offerDimensions}
      height={offerDimensions}
    >
      <BasePlaceholderLine width={40} height={40} />
      <Spacer size={"$6"} />
      <PlaceholderTexts.Body1 width={offerDimensionsMinusPadding * 0.6} />
      <Spacer size={"$4"} />
      <PlaceholderTexts.Body3 width={offerDimensionsMinusPadding} />
      <Spacer size={"$2"} />
      <PlaceholderTexts.Body3 width={offerDimensionsMinusPadding} />
      <Spacer size={"$2"} />
      <PlaceholderTexts.Body3 width={offerDimensionsMinusPadding * 0.4} />
    </YStack>
  );
};

export { OfferLoadingPlaceholder };
