import { useMemo } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { Body1, Header1 } from "components/atoms/texts";
import { ScreenContainer, ScreenSubContainer } from "components/atoms/layout";
import { CONTENT_HEIGHT } from "../constants";
import { useBottomSheetWithControls } from "../hooks";
import { BottomSheetWithFlatList } from "./BottomSheetWithFlatList";

const meta: ComponentMeta<typeof BottomSheetWithFlatList> = {
  title: storybookTitles.atoms,
  component: BottomSheetWithFlatList,
};

const BottomSheetWithFlatListStory: ComponentStory<
  typeof BottomSheetWithFlatList
> = () => {
  const { sheetRef } = useBottomSheetWithControls();
  const data = useMemo(() => Array.from(Array(25)).map((_, index) => index), []);

  return (
    <ScreenContainer backgroundColor={"$black"}>
      <ScreenSubContainer alignItems={"center"} justifyContent={"center"} flex={1}>
        {["Example", "Of", "Some", "Random", "Text"].map((text) => (
          <Header1 key={text} color={"$white"}>
            {text}
          </Header1>
        ))}
      </ScreenSubContainer>
      <BottomSheetWithFlatList
        data={data}
        index={0}
        enablePanDownToClose={false}
        renderItem={({ index }) => (
          <Body1 color={"$white"} padding={"$6"}>{`Item #${index + 1}`}</Body1>
        )}
        snapPoints={["20%", CONTENT_HEIGHT]}
        maxProportionOfWindowHeight={0.9}
        ref={sheetRef}
      />
    </ScreenContainer>
  );
};

BottomSheetWithFlatListStory.storyName = "BottomSheetWithFlatList - Always Visible";

export default meta;
export { BottomSheetWithFlatListStory };
