import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { LandingOverlay } from "./LandingOverlay";

const meta: ComponentMeta<typeof LandingOverlay> = {
  title: storybookTitles.organisms,
  component: LandingOverlay,
};

const LandingOverlayStory: ComponentStory<typeof LandingOverlay> = () => (
  <LandingOverlay />
);

LandingOverlayStory.storyName = "LandingOverlay";

export default meta;
export { LandingOverlayStory };
