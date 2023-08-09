import { useMemo } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useHeaderHeight } from "@react-navigation/elements";
import { CONTENT_HEIGHT } from "components/atoms/bottom-sheets/constants";
import { useTransactionsBottomSheetStore } from "services/zustand";
import { useWindowDimensions } from "tamagui";
import { getSpaceValue } from "theme/utils";
import { useLayoutAnimationOnChange } from "utils";

const useSnapPoints = () => {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();
  const homeScreenContentY = useTransactionsBottomSheetStore(
    (state) => state.homeScreenContentY,
  );
  const { height: windowHeight } = useWindowDimensions();
  const firstSnapPoint = useMemo(
    () =>
      homeScreenContentY
        ? windowHeight -
          tabBarHeight -
          headerHeight -
          homeScreenContentY -
          getSpaceValue(6)
        : 0,
    [headerHeight, homeScreenContentY, tabBarHeight, windowHeight],
  );

  const snapPoints = useMemo(() => [firstSnapPoint, CONTENT_HEIGHT], [firstSnapPoint]);

  useLayoutAnimationOnChange(firstSnapPoint);

  return snapPoints;
};

export { useSnapPoints };
