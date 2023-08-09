import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { SampleComponent } from "./SampleComponent";

const meta: ComponentMeta<typeof SampleComponent> = {
  title: storybookTitles.atoms,
  component: SampleComponent,
};

const SampleComponentStory: ComponentStory<typeof SampleComponent> = () => (
  <SampleComponent text={"storybook sample"} />
);

SampleComponentStory.storyName = "SampleComponent";

export default meta;
export { SampleComponentStory };
