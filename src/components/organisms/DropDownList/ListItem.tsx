import { useCallback } from "react";
import { Body1, BaseTouchable } from "components/atoms";
import { ListItemProps } from "./types";

const ListItem = <Id extends string>({
  id,
  isSelected,
  onPress,
  text,
}: ListItemProps<Id>) => {
  const handleOnPress = useCallback(() => {
    onPress(id);
  }, [onPress, id]);

  return (
    <BaseTouchable
      borderRadius={"$2"}
      backgroundColor={isSelected ? "$white10" : undefined}
      padding={"$4"}
      onPress={handleOnPress}
    >
      <Body1 color={"$white"}>{text}</Body1>
    </BaseTouchable>
  );
};

export { ListItem };
