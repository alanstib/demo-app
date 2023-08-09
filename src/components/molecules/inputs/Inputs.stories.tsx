import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { Body1, Header3 } from "components/atoms";
import { storybookTitles } from "storybook";
import { ScrollView, Spacer, YStack } from "tamagui";
import { BaseInputWithTheme } from "./BaseInputWithTheme";
import { MultilineInput } from "./MultilineInput";
import { SearchInput } from "./SearchInput";

const meta: ComponentMeta<typeof BaseInputWithTheme> = {
  title: storybookTitles.molecules,
  component: BaseInputWithTheme,
  decorators: [
    (Story) => (
      <YStack flex={1} padding={"$6"} backgroundColor={"$figmaBackground"}>
        <Story />
      </YStack>
    ),
  ],
};

const InputsStory: ComponentStory<typeof BaseInputWithTheme> = () => (
  <ScrollView scrollEnabled={true}>
    <Header3 color={"$white50"}>{"Base Input"}</Header3>
    <Spacer size={"$5"} />
    <BaseInputWithTheme placeholder={"Enter some text..."} />

    <Spacer size={"$8"} />

    <Header3 color={"$white50"}>{"Search Input"}</Header3>
    <Spacer size={"$5"} />
    <SearchInput />

    <Spacer size={"$8"} />

    <Header3 color={"$white50"}>{"Multiline Input"}</Header3>
    <Spacer size={"$5"} />
    <MultilineInput
      placeholder={"Enter your details..."}
      size={"$2"}
      numberOfLines={3}
      width={"$full"}
    />

    <Spacer size={"$8"} />

    <Header3 color={"$white50"}>{"Controlled Form Input"}</Header3>
    <Spacer size={"$5"} />
    <Body1 color={"$white30"}>
      {
        "See Form Story for an example of what ControlledFormInput looks like & how it's used."
      }
    </Body1>
  </ScrollView>
);

InputsStory.storyName = "Inputs";

export default meta;
export { InputsStory };
