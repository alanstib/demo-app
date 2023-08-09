import { Component } from "react";
import { FlatList } from "react-native";
import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { Body1, Header1, Header4 } from "components/atoms";
import { storybookTitles } from "storybook";
import { getTokens, SizeTokens, Spacer, XStack, YStack } from "tamagui";
import { getSpaceValue } from "theme/utils";
import { typedEntries } from "utils";

const meta: ComponentMeta<typeof Component> = {
  title: storybookTitles.atoms,
};

const SpaceStory: ComponentStory<typeof Component> = () => {
  const spaceTokens = getTokens({ prefixed: true }).space;

  return (
    <FlatList
      data={typedEntries(spaceTokens)}
      contentContainerStyle={{
        paddingHorizontal: getSpaceValue(6),
      }}
      ListHeaderComponent={
        <>
          <Header1 paddingBottom={"$6"}>{"Space"}</Header1>
          <XStack flex={1}>
            <Header4 textDecorationLine={"underline"} flex={2}>
              {"KEY"}
            </Header4>
            <Header4 textDecorationLine={"underline"} flex={2}>
              {"VAL"}
            </Header4>
            <Header4 textDecorationLine={"underline"} flex={8}>
              {"EXAMPLE"}
            </Header4>
          </XStack>
          <Spacer size={"$3"} />
        </>
      }
      ItemSeparatorComponent={() => <Spacer size={"$6"} />}
      renderItem={({ item }) => {
        const [token, { key, val }] = item;

        return (
          <XStack alignItems={"center"}>
            <Body1 flex={2}>{key}</Body1>
            <Body1 flex={2}>{val}</Body1>
            <YStack flex={8}>
              <YStack
                backgroundColor={"black"}
                height={"$4"}
                width={token as SizeTokens}
              />
            </YStack>
          </XStack>
        );
      }}
    />
  );
};

SpaceStory.storyName = "Space";

export default meta;
export { SpaceStory };
