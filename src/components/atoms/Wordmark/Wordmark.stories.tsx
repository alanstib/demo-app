import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { YStack } from "tamagui";
import { Wordmark } from "./Wordmark";

const meta: ComponentMeta<typeof Wordmark> = {
  title: storybookTitles.atoms,
  component: Wordmark,
  decorators: [
    (Story) => (
      <YStack flex={1} padding={"$6"} backgroundColor={"$gray12"}>
        <Story />
      </YStack>
    ),
  ],
};

const WordmarkStory: ComponentStory<typeof Wordmark> = () => <Wordmark />;

WordmarkStory.storyName = "Wordmark";

export default meta;
export { WordmarkStory };
