import { PlaceholderTexts, ScreenSubContainer } from "components/atoms";
import { Placeholder, Progressive } from "rn-placeholder";
import { Spacer, XStack } from "tamagui";

const LoadingPlaceholder = () => (
  <Placeholder Animation={Progressive}>
    <ScreenSubContainer alignItems={"center"}>
      <PlaceholderTexts.Body2 width={60} />
      <Spacer size={"$6"} />
      <PlaceholderTexts.Header2 width={200} />
      <Spacer size={"$6"} />
      <PlaceholderTexts.Body2 width={90} />
      <Spacer size={"$7"} />
      <PlaceholderTexts.Header2 width={150} />
      <Spacer size={"$10"} />
      <PlaceholderTexts.Body1 width={300} />
      <Spacer size={"$6"} />
      <PlaceholderTexts.Body2 width={60} />
      <Spacer size={"$10"} />
      <XStack width={"$full"} justifyContent={"space-between"}>
        <PlaceholderTexts.Body2 width={60} />
        <PlaceholderTexts.Body2 width={70} />
      </XStack>
      <Spacer size={"$7"} />
      <XStack width={"$full"} justifyContent={"space-between"}>
        <PlaceholderTexts.Body2 width={60} />
        <PlaceholderTexts.Body2 width={70} />
      </XStack>
    </ScreenSubContainer>
  </Placeholder>
);

export { LoadingPlaceholder };
