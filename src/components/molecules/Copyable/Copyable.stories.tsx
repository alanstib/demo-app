import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { Body1 } from "components/atoms";
import { Copyable } from "./Copyable";

const meta: ComponentMeta<typeof Copyable> = {
  title: storybookTitles.atoms,
  component: Copyable,
};

const CopyableStory: ComponentStory<typeof Copyable> = () => (
  <Copyable textToCopy={"Copy me!"}>
    <Body1>{"Copy me!"}</Body1>
  </Copyable>
);

CopyableStory.storyName = "Copyable";

export default meta;
export { CopyableStory };
