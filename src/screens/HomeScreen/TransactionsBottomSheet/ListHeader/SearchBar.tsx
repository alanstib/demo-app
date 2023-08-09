import { useCallback } from "react";
import { Icon, Touchable } from "components/atoms";
import { SearchInput } from "components/molecules/inputs";
import { YStack } from "tamagui";
import { ListHeaderProps } from "./types";

type SearchBarProps = Pick<
  ListHeaderProps,
  "searchText" | "setSearchText" | "toggleIsSearchBarVisible"
>;

const SearchBar = ({
  searchText,
  setSearchText,
  toggleIsSearchBarVisible,
}: SearchBarProps) => {
  const handleOnXPress = useCallback(() => {
    if (!searchText) {
      toggleIsSearchBarVisible();
    } else {
      setSearchText("");
    }
  }, [searchText, setSearchText, toggleIsSearchBarVisible]);

  return (
    <YStack paddingHorizontal={"$6"}>
      <SearchInput
        autoFocus={true}
        RightComponent={
          <Touchable onPress={handleOnXPress}>
            <Icon iconName={"x"} width={12} tintColor={"white50"} />
          </Touchable>
        }
        value={searchText}
        onChangeText={setSearchText}
      />
    </YStack>
  );
};

export { SearchBar };
