import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { FixedImage, ScreenContainer } from "components/atoms";
import { storybookTitles } from "storybook";
import { YStack } from "tamagui";
import { EnterFeedbackForm } from "./EnterFeedbackForm";

const meta: ComponentMeta<typeof EnterFeedbackForm> = {
  title: storybookTitles.organisms,
  component: EnterFeedbackForm,
};

const EnterFeedbackFormStory: ComponentStory<typeof EnterFeedbackForm> = () => (
  <ScreenContainer>
    <FixedImage imageName={"background-strand-alpha"} top={"$15"} />
    <YStack paddingHorizontal={"$6"} flex={1} justifyContent={"flex-end"}>
      <EnterFeedbackForm />
    </YStack>
  </ScreenContainer>
);

EnterFeedbackFormStory.storyName = "EnterFeedbackForm";

export default meta;
export { EnterFeedbackFormStory };
