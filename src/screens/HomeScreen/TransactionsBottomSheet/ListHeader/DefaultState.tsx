import { Icon, Label, Touchable } from "components/atoms";
import { XStack } from "tamagui";
import { ListHeaderProps } from "./types";

type DefaultStateProps = Pick<
  ListHeaderProps,
  "toggleIsSearchBarVisible" | "toggleAreFiltersVisible"
>;

const DefaultState = ({
  toggleIsSearchBarVisible,
  toggleAreFiltersVisible,
}: DefaultStateProps) => (
  <XStack alignItems={"center"} paddingHorizontal={"$6"} justifyContent={"space-between"}>
    <Touchable onPress={toggleIsSearchBarVisible}>
      <Icon width={24} iconName={"search"} tintColor={"white"} />
    </Touchable>
    <Label color={"$white50"} textTransform={"uppercase"}>
      {"Transactions"}
    </Label>
    <Touchable onPress={toggleAreFiltersVisible}>
      <Icon width={24} iconName={"menu"} tintColor={"white"} />
    </Touchable>
  </XStack>
);

export { DefaultState };
