import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { Placeholder, Progressive } from "rn-placeholder";
import { storybookTitles } from "storybook";
import { XStack, YStack } from "tamagui";
import { getSpaceValue } from "theme/utils";
import { Offer } from "./Offer";
import { OfferLoadingPlaceholder } from "./OfferLoadingPlaceholder";

const meta: ComponentMeta<typeof Offer> = {
  title: storybookTitles.molecules,
  component: Offer,
  decorators: [
    (Story) => (
      <YStack flex={1} padding={"$6"} backgroundColor={"$black"}>
        <Story />
      </YStack>
    ),
  ],
};

const OfferStory: ComponentStory<typeof Offer> = () => (
  <XStack gap={getSpaceValue(6)}>
    <Offer
      title={"Lyft Pink"}
      subtitle={"6 months of discounted rides."}
      imageSrc={"https://assets.development.hypercard.com/benefits/lyft.png"}
    />
    <Placeholder Animation={Progressive}>
      <OfferLoadingPlaceholder />
    </Placeholder>
  </XStack>
);

OfferStory.storyName = "Offer";

export default meta;
export { OfferStory };
