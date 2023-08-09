import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { TagItem } from "./TagItem";

const meta: ComponentMeta<typeof TagItem> = {
  title: storybookTitles.atoms,
  component: TagItem,
};

const TagItemStory: ComponentStory<typeof TagItem> = () => (
  <TagItem>{"Sample Tag"}</TagItem>
);

TagItemStory.storyName = "TagItem";

export default meta;
export { TagItemStory };
