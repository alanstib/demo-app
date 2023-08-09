import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { YStack } from "tamagui";
import { SectionHeader } from "./SectionHeader";

const meta: ComponentMeta<typeof SectionHeader> = {
  title: storybookTitles.molecules,
  component: SectionHeader,
  decorators: [
    (Story) => (
      <YStack flex={1} padding={"$6"} backgroundColor={"$black"}>
        <Story />
      </YStack>
    ),
  ],
};

const SectionHeaderStory: ComponentStory<typeof SectionHeader> = () => (
  <SectionHeader
    leftText={"Section Title"}
    rightText={"VIEW MORE"}
    rightOnPress={() => {}}
  />
);

SectionHeaderStory.storyName = "SectionHeader";

export default meta;
export { SectionHeader };
