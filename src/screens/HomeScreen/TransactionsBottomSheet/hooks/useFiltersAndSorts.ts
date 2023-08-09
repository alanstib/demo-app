import { useState, useMemo, useCallback } from "react";
import { useBooleanState, useLayoutAnimationOnChange } from "utils/hooks";
import {
  filterAndSortSelectionData,
  DEFAULT_SORTING_ID,
  FilterOrSortId,
  FilterData,
} from "../constants";
import { isFilterId, isSortId } from "../utils";

const useFiltersAndSorts = () => {
  const { state: areFiltersVisible, toggleState: toggleAreFiltersVisible } =
    useBooleanState(false);
  const [filtersAndSorts, setSelectedFiltersAndSorts] = useState(
    filterAndSortSelectionData,
  );

  const selectedFiltersAndSorts = useMemo(
    () =>
      filtersAndSorts.filter((item) => item.isSelected && item.id !== DEFAULT_SORTING_ID),
    [filtersAndSorts],
  );

  const selectedFilters = useMemo(
    () =>
      filtersAndSorts.filter(
        (item) => item.isSelected && isFilterId(item.id),
      ) as FilterData,
    [filtersAndSorts],
  );

  const handleSetSelectedFiltersAndSorts = useCallback(
    (tappedId: FilterOrSortId, shouldResetSort?: boolean) => {
      const previouslySelectedSort = filtersAndSorts.find(
        (item) => isSortId(item.id) && item.isSelected,
      );

      if (tappedId === previouslySelectedSort?.id && shouldResetSort !== true) {
        // Changing a sort happens when a different sort is tapped
        // So, no need to update state if the same sort is tapped
        return;
      }

      setSelectedFiltersAndSorts((prevFiltersAndSorts) => {
        const newFiltersAndSorts = prevFiltersAndSorts.map((item) => {
          if (isSortId(item.id) && isSortId(tappedId)) {
            // Only allow for a single sort option to be enabled at a given time

            const isSelected = shouldResetSort
              ? item.id === tappedId
                ? false
                : item.isSelected
              : item.id === tappedId;

            return {
              ...item,
              isSelected,
            };
          }

          return {
            ...item,
            isSelected: item.id === tappedId ? !item.isSelected : item.isSelected,
          };
        });

        const hasSelectedSort =
          newFiltersAndSorts.filter((item) => item.isSelected && isSortId(item.id))
            .length > 0;

        if (!hasSelectedSort) {
          // If no sort is selected, select the default sort
          return newFiltersAndSorts.map((item) => {
            if (item.id === DEFAULT_SORTING_ID) {
              return {
                ...item,
                isSelected: true,
              };
            }

            return item;
          });
        }

        return newFiltersAndSorts;
      });
    },
    [filtersAndSorts],
  );

  const isSortingByAmount = useMemo(
    () =>
      selectedFiltersAndSorts.filter(
        (item) => item.id === "highest" || item.id === "lowest",
      ).length > 0,
    [selectedFiltersAndSorts],
  );

  const handleDataTagPress = useCallback(
    (tappedId: FilterOrSortId) => {
      handleSetSelectedFiltersAndSorts(tappedId, true);
    },
    [handleSetSelectedFiltersAndSorts],
  );

  useLayoutAnimationOnChange(areFiltersVisible);
  useLayoutAnimationOnChange(selectedFiltersAndSorts);

  return {
    selectedFiltersAndSorts,
    selectedFilters,
    setSelectedFiltersAndSorts: handleSetSelectedFiltersAndSorts,
    handleDataTagPress,
    filtersAndSorts,
    areFiltersVisible,
    toggleAreFiltersVisible,
    isSortingByAmount,
  };
};

export { useFiltersAndSorts };
