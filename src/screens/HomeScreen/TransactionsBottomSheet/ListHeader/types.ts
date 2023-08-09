type ListHeaderProps = {
  searchText: string;
  isSearchBarVisible: boolean;
  setSearchText: (text: string) => void;
  toggleIsSearchBarVisible: () => void;
  toggleAreFiltersVisible: () => void;
};

export { ListHeaderProps };
