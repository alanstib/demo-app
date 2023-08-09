import { Component } from "react";
import { Text, YStack } from "tamagui";
import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { ScreenContainer } from "components/atoms/layout";
import { PrimaryButton } from "components/molecules/buttons";
import { useBottomSheetWithControls } from "../hooks";
import { CONTENT_HEIGHT } from "../constants";
import { BottomSheetWithView } from "./BottomSheetWithView";

const meta: ComponentMeta<typeof BottomSheetWithView> = {
  title: storybookTitles.atoms,
  component: BottomSheetWithView,
  id: "BottomSheetWithView",
};

const createStoryName = (variationType: string) =>
  `BottomSheetWithView - ${variationType}`;

const HiddenBottomSheetWithView: ComponentStory<typeof Component> = () => {
  const { sheetRef, handleOpenBottomSheet } = useBottomSheetWithControls();

  return (
    <>
      <ScreenContainer>
        <YStack paddingTop={"$3"} paddingHorizontal={"$3"}>
          <PrimaryButton
            color={"$white"}
            onPress={handleOpenBottomSheet}
            backgroundColor={"$black"}
          >
            {"Open Bottom Sheet"}
          </PrimaryButton>
        </YStack>
      </ScreenContainer>
      <BottomSheetWithView ref={sheetRef}>
        <YStack padding={"$3"}>
          <Text>{"Some Content"}</Text>
        </YStack>
      </BottomSheetWithView>
    </>
  );
};

const AlwaysVisibleBottomSheetWithView: ComponentStory<typeof Component> = () => {
  const { sheetRef } = useBottomSheetWithControls();

  return (
    <>
      <BottomSheetWithView
        index={0}
        ref={sheetRef}
        enablePanDownToClose={false}
        snapPoints={["10%", CONTENT_HEIGHT]}
      >
        <YStack padding={"$3"}>
          <Text>{"Some Content"}</Text>
        </YStack>
      </BottomSheetWithView>
    </>
  );
};

HiddenBottomSheetWithView.storyName = createStoryName("Starts Hidden");
AlwaysVisibleBottomSheetWithView.storyName = createStoryName("Always Visible");

export default meta;
export { HiddenBottomSheetWithView, AlwaysVisibleBottomSheetWithView };
