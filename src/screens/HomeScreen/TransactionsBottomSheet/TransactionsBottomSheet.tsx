import { StyleSheet } from "react-native";
import { BottomSheetWithFlatList } from "components/atoms/bottom-sheets";
import { useBottomSheetWithControls } from "components/atoms/bottom-sheets/hooks";
import { Spacer, YStack } from "tamagui";
import { getSpaceValue } from "theme/utils";
import { LinearGradient } from "expo-linear-gradient";
import { DataTagList, DropDownList } from "components/organisms";
import { ListHeader } from "./ListHeader";
import { useTransactionsSearchResults } from "./hooks";
import { ListItemProps } from "./types";
import { ListItem } from "./ListItem";
import { dropDownGradientColors } from "./constants";
import { useSnapPoints } from "./hooks/useFirstSnapPoint";
import { ListFooterComponent } from "./ListFooterComponent";
import { ListEmptyComponent } from "./ListEmptyComponent";

const styles = StyleSheet.create({
  linearGradient: { borderRadius: getSpaceValue(2) },
});

const keyExtractor = (item: ListItemProps) => `${item.id}`;

const renderItem = ({ item }: { item: ListItemProps }) => <ListItem {...item} />;

const TransactionsBottomSheet = () => {
  const { sheetRef } = useBottomSheetWithControls();

  const snapPoints = useSnapPoints();

  const {
    // search
    isSearchBarVisible,
    toggleIsSearchBarVisible,
    searchText,
    searchTextForQuery,
    setSearchText,

    // general query
    data,
    error,
    loading,
    refetch,
    fetchMore,
    isFetchingMore,

    // filters + sorts
    selectedFiltersAndSorts,
    selectedFilters,
    handleDataTagPress,
    setSelectedFiltersAndSorts,
    areFiltersVisible,
    filtersAndSorts,
    toggleAreFiltersVisible,
  } = useTransactionsSearchResults();

  return (
    <BottomSheetWithFlatList
      HeaderComponent={
        <>
          <ListHeader
            searchText={searchText}
            setSearchText={setSearchText}
            isSearchBarVisible={isSearchBarVisible}
            toggleIsSearchBarVisible={toggleIsSearchBarVisible}
            toggleAreFiltersVisible={toggleAreFiltersVisible}
          />
          {selectedFiltersAndSorts.length > 0 ? (
            <YStack paddingVertical={"$6"}>
              <DataTagList data={selectedFiltersAndSorts} onPress={handleDataTagPress} />
            </YStack>
          ) : null}

          <YStack
            backgroundColor={"$figmaBackground"}
            zIndex={100}
            position={"absolute"}
            right={"$6"}
            top={50}
            width={188}
            height={areFiltersVisible ? undefined : 0}
            borderRadius={"$2"}
          >
            <LinearGradient style={styles.linearGradient} colors={dropDownGradientColors}>
              <DropDownList
                data={filtersAndSorts}
                onListItemPress={setSelectedFiltersAndSorts}
                dividingIndex={3}
                numItemsAboveTheFold={filtersAndSorts.length}
              />
            </LinearGradient>
          </YStack>
        </>
      }
      keyboardBehavior={"interactive"}
      keyboardBlurBehavior={"none"}
      bottomSheetFlatListProps={{
        keyboardShouldPersistTaps: "handled",
        onEndReachedThreshold: 0.1,
        onEndReached: fetchMore,
        keyExtractor,
        ListEmptyComponent: (
          <ListEmptyComponent
            searchTextForQuery={searchTextForQuery}
            selectedFilters={selectedFilters}
            loading={loading}
            error={error}
            refetch={refetch}
          />
        ),
        ItemSeparatorComponent: () => <Spacer size={"$3"} />,
        ListFooterComponent: <ListFooterComponent isFetchingMore={isFetchingMore} />,
      }}
      index={0}
      data={data}
      enablePanDownToClose={false}
      renderItem={renderItem}
      snapPoints={snapPoints}
      key={`transactions-bottom-sheet-${snapPoints[0]}`}
      maxProportionOfWindowHeight={0.7}
      ref={sheetRef}
    />
  );
};

export { TransactionsBottomSheet };
