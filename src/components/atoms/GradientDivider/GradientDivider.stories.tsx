import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { YStack } from "tamagui";
import { GradientDivider } from "./GradientDivider";

const meta: ComponentMeta<typeof GradientDivider> = {
  title: storybookTitles.atoms,
  component: GradientDivider,
  decorators: [
    (Story) => (
      <YStack flex={1} padding={"$6"} backgroundColor={"$gray12"}>
        <Story />
      </YStack>
    ),
  ],
};

const GradientDividerStory: ComponentStory<typeof GradientDivider> = () => (
  <GradientDivider variant={"dark"} />
);

GradientDividerStory.storyName = "GradientDivider";

export default meta;
export { GradientDividerStory };
