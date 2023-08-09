import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { Spacer, YStack } from "tamagui";
import { Icon } from "../images";
import { Header1 } from "../texts";
import { ScreenContainer, ScreenSubContainer } from "../layout";
import { Touchable } from "./Touchable";

const meta: ComponentMeta<typeof Touchable> = {
  title: storybookTitles.atoms,
  component: Touchable,
  decorators: [
    (Story) => (
      <ScreenContainer>
        <Story />
      </ScreenContainer>
    ),
  ],
};

const TouchableStory: ComponentStory<typeof Touchable> = () => (
  <ScreenSubContainer paddingVertical={"$6"}>
    <Header1 color={"$white"}>{"Touchable"}</Header1>
    <Spacer size={"$8"} />
    <YStack alignItems={"center"}>
      <Touchable>
        <Icon iconName={"home"} width={24} />
      </Touchable>
    </YStack>
  </ScreenSubContainer>
);

TouchableStory.storyName = "Touchable";

export default meta;
export { TouchableStory };
