import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { YStack } from "tamagui";
import { LogoWithWordmark } from "./LogoWithWordmark";

const meta: ComponentMeta<typeof LogoWithWordmark> = {
  title: storybookTitles.atoms,
  component: LogoWithWordmark,
  decorators: [
    (Story) => (
      <YStack flex={1} padding={"$6"} backgroundColor={"$gray12"}>
        <Story />
      </YStack>
    ),
  ],
};

const LogoWithWordmarkStory: ComponentStory<typeof LogoWithWordmark> = () => (
  <LogoWithWordmark />
);

LogoWithWordmarkStory.storyName = "LogoWithWordmark";

export default meta;
export { LogoWithWordmarkStory };
