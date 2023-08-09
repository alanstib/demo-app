import { ReactNode, useCallback } from "react";
import { YStack } from "tamagui";
import { ItemContainer, ItemContainerProps } from "../ItemContainer";

type SelectionItemData<Id = string> = {
  id: Id;
  isSelected: boolean;
};

type SelectionItemProps<Id = string> = Pick<
  SelectionItemData<Id>,
  "id" | "isSelected"
> & {
  LeftComponent: ReactNode;
  outlineType?: "solid" | "hidden";
  onPress: (id: Id) => void;
  disabled?: boolean;
} & Pick<ItemContainerProps, "borderRadiusType">;

const SelectedCircle = <Id extends string>({
  isSelected,
}: Pick<SelectionItemProps<Id>, "isSelected">) => (
  <YStack
    alignItems={"center"}
    justifyContent={"center"}
    borderRadius={"$12"}
    width={"$7"}
    height={"$7"}
    backgroundColor={"$white15"}
  >
    {isSelected ? (
      <YStack
        backgroundColor={"$white70"}
        borderRadius={"$12"}
        position={"absolute"}
        width={"$5"}
        height={"$5"}
      />
    ) : null}
  </YStack>
);

const SelectionItem = <Id extends string>({
  isSelected,
  LeftComponent,
  onPress,
  id,
  outlineType = "solid",
  borderRadiusType,
  disabled,
}: SelectionItemProps<Id>) => {
  const handleOnPress = useCallback(() => {
    onPress(id);
  }, [id, onPress]);

  return (
    <ItemContainer
      borderRadiusType={borderRadiusType}
      borderWidth={outlineType === "hidden" ? undefined : "$1"}
      borderColor={
        outlineType === "hidden" ? undefined : isSelected ? "$white15" : undefined
      }
      onPress={handleOnPress}
      disabled={disabled}
    >
      <YStack flex={1}>{LeftComponent}</YStack>
      {<SelectedCircle isSelected={isSelected} />}
    </ItemContainer>
  );
};

export { SelectionItem };
export type { SelectionItemData, SelectionItemProps };
