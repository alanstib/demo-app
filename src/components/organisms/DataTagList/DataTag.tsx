import { useCallback } from "react";
import { Icon, Tag, Touchable } from "components/atoms";
import { Spacer, XStack } from "tamagui";

type DataTagProps<Id> = {
  text: string;
  id: Id;
  onPress: (id: Id) => void;
};

const DataTag = <Id,>({ text, id, onPress }: DataTagProps<Id>) => {
  const handleOnPress = useCallback(() => {
    onPress(id);
  }, [id, onPress]);

  return (
    <Touchable
      onPress={handleOnPress}
      padding={"$4"}
      borderRadius={"$8"}
      backgroundColor={"$white5"}
    >
      <XStack padding={"$2"} alignItems={"center"}>
        <Icon iconName={"x"} width={8} tintColor={"white70"} />
        <Spacer size={"$4"} />
        <Tag color={"$white50"}>{text}</Tag>
      </XStack>
    </Touchable>
  );
};

export { DataTag };
export type { DataTagProps };
