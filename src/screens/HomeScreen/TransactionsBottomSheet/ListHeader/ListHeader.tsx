import { GradientDivider } from "components/atoms";
import { Spacer } from "tamagui";
import { DefaultState } from "./DefaultState";
import { SearchBar } from "./SearchBar";
import { ListHeaderProps } from "./types";

const ListHeader = ({
  searchText,
  isSearchBarVisible,
  setSearchText,
  toggleIsSearchBarVisible,
  toggleAreFiltersVisible,
}: ListHeaderProps) => (
  <>
    <Spacer size={"$5"} />
    {isSearchBarVisible ? (
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        toggleIsSearchBarVisible={toggleIsSearchBarVisible}
      />
    ) : (
      <DefaultState
        toggleAreFiltersVisible={toggleAreFiltersVisible}
        toggleIsSearchBarVisible={toggleIsSearchBarVisible}
      />
    )}
    <Spacer size={"$7"} />
    <GradientDivider variant={"dark"} />
  </>
);

export { ListHeader };
