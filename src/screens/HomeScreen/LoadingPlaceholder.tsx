import { PlaceholderTexts, ScreenSubContainer } from "components/atoms";
import { Placeholder, PlaceholderLine, Progressive } from "rn-placeholder";
import { Spacer } from "tamagui";
import { getColorValue } from "theme/utils";
import { styles } from "./styles";

const flipCardBorderRadius = (styles.flipCard.height * 22) / 368;

const LoadingPlaceholder = () => (
  <Placeholder Animation={Progressive}>
    <ScreenSubContainer alignItems={"center"}>
      <Spacer size={"$4"} />
      <PlaceholderTexts.Body2 width={80} />
      <Spacer size={"$2"} />
      <PlaceholderTexts.Header1 width={200} />
      <Spacer size={"$5"} />
      <PlaceholderTexts.Body1 width={170} />
      <Spacer size={"$6"} />
      <PlaceholderLine
        color={getColorValue("figmaBackground")}
        style={[styles.flipCard, { borderRadius: flipCardBorderRadius }]}
      />
      <Spacer size={"$6"} />
      <PlaceholderTexts.Header1 width={120} />
      <Spacer size={"$6"} />
      <PlaceholderTexts.Body1 width={120} />
    </ScreenSubContainer>
  </Placeholder>
);

export { LoadingPlaceholder };
