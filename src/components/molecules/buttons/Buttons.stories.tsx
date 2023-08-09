import { Alert } from "react-native";
import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { Spacer, YStack } from "tamagui";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { TextButton } from "./TextButton";

const meta: ComponentMeta<typeof PrimaryButton> = {
  title: storybookTitles.molecules,
  component: PrimaryButton,
  decorators: [
    (Story) => (
      <YStack flex={1} padding={"$6"} backgroundColor={"$gray12"}>
        <Story />
      </YStack>
    ),
  ],
};

const onPress = () => Alert.alert("Pressed");

const ButtonsStory: ComponentStory<typeof PrimaryButton> = () => (
  <>
    <PrimaryButton onPress={onPress}>{"Primary Button"}</PrimaryButton>
    <Spacer size={"$6"} />
    <PrimaryButton onPress={onPress} disabled={true}>
      {"Primary Button - Disabled"}
    </PrimaryButton>
    <Spacer size={"$6"} />
    <SecondaryButton onPress={onPress}>{"Secondary Button"}</SecondaryButton>
    <Spacer size={"$6"} />
    <SecondaryButton onPress={onPress} disabled={true}>
      {"Secondary Button - Disabled"}
    </SecondaryButton>
    <Spacer size={"$6"} />
    <TextButton onPress={onPress}>{"Text Button"}</TextButton>
    <Spacer size={"$6"} />
    <TextButton onPress={onPress} disabled={true}>
      {"Text Button - Disabled"}
    </TextButton>
  </>
);

ButtonsStory.storyName = "Buttons";

export default meta;
export { ButtonsStory };
