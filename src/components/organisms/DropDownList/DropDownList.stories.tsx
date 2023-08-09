import { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { YStack } from "tamagui";
import { DropDownList, DropDownListProps } from "./DropDownList";

const meta: ComponentMeta<typeof DropDownList> = {
  title: storybookTitles.organisms,
  component: DropDownList,
  decorators: [
    (Story) => (
      <YStack flex={1} padding={"$6"} backgroundColor={"$figmaBackground"}>
        <Story />
      </YStack>
    ),
  ],
};

const data: DropDownListProps<string>["data"] = [
  {
    id: "recent",
    isSelected: true,
    text: "Recent - Old",
  },
  {
    id: "old",
    isSelected: false,
    text: "Old - Recent",
  },
  {
    id: "pending",
    isSelected: false,
    text: "Pending",
  },
  {
    id: "payment",
    isSelected: false,
    text: "Payment",
  },
  {
    id: "withdrawal",
    isSelected: false,
    text: "Withdrawal",
  },
  {
    id: "random",
    isSelected: false,
    text: "Random",
  },
];

const DropDownListStory: ComponentStory<typeof DropDownList> = () => {
  const [selections, handleSelections] = useState(data);

  return (
    <DropDownList
      dividingIndex={3}
      numItemsAboveTheFold={3}
      data={selections}
      onListItemPress={(id) =>
        handleSelections((prevSelections) =>
          prevSelections.map((selection) => ({
            ...selection,
            isSelected:
              selection.id === id ? !selection.isSelected : selection.isSelected,
          })),
        )
      }
    />
  );
};

DropDownListStory.storyName = "DropDownList";

export default meta;
export { DropDownListStory };
