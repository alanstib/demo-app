import { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { Body2, Header1, Header4 } from "components/atoms";
import { storybookTitles } from "storybook";
import { ColorTokens, getTokens, XStack, YStack } from "tamagui";
import { getColorValue, getSpaceValue } from "theme/utils";
import { typedEntries } from "utils";

const meta: ComponentMeta<typeof Component> = {
  title: storybookTitles.atoms,
};

const FLEX_COL_1 = 3;
const FLEX_COL_2 = 6;
const FLEX_COL_3 = 4;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: getSpaceValue(6),
    paddingVertical: getSpaceValue(6),
    backgroundColor: getColorValue("figmaBackground"),
  },
  header: {
    backgroundColor: getColorValue("figmaBackground"),
  },
});

const ColorStory: ComponentStory<typeof Component> = () => {
  const colorTokens = getTokens({ prefixed: true }).color;

  return (
    <FlatList
      data={typedEntries(colorTokens)}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={
        <YStack padding={"$6"} backgroundColor={"$figmaBackground"}>
          <Header1 paddingBottom={"$6"}>{"Color"}</Header1>
          <XStack flex={1}>
            <Header4 textDecorationLine={"underline"} flex={FLEX_COL_1}>
              {"KEY"}
            </Header4>
            <Header4 textDecorationLine={"underline"} flex={FLEX_COL_2}>
              {"VAL"}
            </Header4>
            <Header4 textDecorationLine={"underline"} flex={FLEX_COL_3}>
              {"COLOR"}
            </Header4>
          </XStack>
          <YStack height={"$3"} />
        </YStack>
      }
      ItemSeparatorComponent={() => <YStack height={"$6"} />}
      renderItem={({ item }) => {
        const [token, { val }] = item;

        return (
          <XStack alignItems={"center"}>
            <Body2 flex={FLEX_COL_1}>{token.replace("$", "")}</Body2>
            <Body2 flex={FLEX_COL_2}>{val}</Body2>
            <YStack flex={FLEX_COL_3}>
              <YStack
                backgroundColor={token as ColorTokens}
                height={"$10"}
                width={"$full"}
              />
            </YStack>
          </XStack>
        );
      }}
    />
  );
};

ColorStory.storyName = "Color";

export default meta;
export { ColorStory };
