import { Fragment, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { Body1, Body2, ScreenContainer, ScreenSubContainer } from "components/atoms";
import { storybookTitles } from "storybook";
import { Spacer, YStack } from "tamagui";
import { useLayoutAnimationOnChange } from "utils";
import { SelectionItem } from "./SelectionItem";

const meta: ComponentMeta<typeof SelectionItem> = {
  title: storybookTitles.molecules,
  component: SelectionItem,
  decorators: [
    (Story) => (
      <ScreenContainer>
        <ScreenSubContainer paddingVertical={"$6"}>
          <Story />
        </ScreenSubContainer>
      </ScreenContainer>
    ),
  ],
};

const LeftComponent = () => (
  <YStack>
    <Body2 color={"$white"}>{"Current balance"}</Body2>
    <Body1 color={"$white"}>{"$1,479.28"}</Body1>
  </YStack>
);

const ids = ["1", "2", "3"];

const SelectionItemStory: ComponentStory<typeof SelectionItem> = () => {
  const [selectedId, setSelectedId] = useState(ids[0]);

  useLayoutAnimationOnChange(selectedId);

  return (
    <>
      {ids.map((id) => (
        <Fragment key={id}>
          <SelectionItem
            onPress={setSelectedId}
            id={id}
            LeftComponent={<LeftComponent />}
            isSelected={id === selectedId}
          />
          <Spacer size={"$6"} />
        </Fragment>
      ))}
    </>
  );
};

SelectionItemStory.storyName = "SelectionItem";

export default meta;
export { SelectionItemStory };
