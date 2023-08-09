import { StyleSheet } from "react-native";
import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { getColorValue } from "theme/utils";
import { YStack } from "tamagui";
import { BaseToggle } from "./BaseToggle";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: getColorValue("white10"),
    borderBottomColor: getColorValue("white10"),
    borderBottomWidth: 1,
    padding: 16,
  },
});

const meta: ComponentMeta<typeof BaseToggle> = {
  title: storybookTitles.atoms,
  component: BaseToggle,
  decorators: [
    (Story) => (
      <YStack style={styles.container}>
        <Story />
      </YStack>
    ),
  ],
};

const BaseToggleStory: ComponentStory<typeof BaseToggle> = () => <BaseToggle />;

BaseToggleStory.storyName = "BaseToggle";

export default meta;
export { BaseToggleStory };
