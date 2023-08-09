import { useEffect, useState } from "react";
import { useBackHandler } from "@react-native-community/hooks";
import { useNavigation } from "@react-navigation/native";
import { NavigationExperience } from "./types";
import { getCurrentScreenName } from "./utils";

const useNavigationExperience = (): NavigationExperience => "logged in";

const useDisableGoBackOnValueTruthiness = (value: boolean) => {
  const navigation = useNavigation();

  useBackHandler(() => value);
  useEffect(() => {
    navigation.setOptions({
      gestureEnabled: !value,
      headerBackVisible: !value,
    });
  }, [value, navigation]);
};

const useSwipeEdgeWidth = (): 0 | undefined => {
  const navigation = useNavigation();
  const [swipeEdgeWidth, setSwipeEdgeWidth] = useState<0 | undefined>(undefined);

  // This also makes it so that it only re-renders if changing from HomeScreen to another screen
  useEffect(
    () =>
      navigation.addListener("state", () => {
        const currentScreenName = getCurrentScreenName();

        setSwipeEdgeWidth(currentScreenName === "HomeScreen" ? undefined : 0);
      }),
    [navigation],
  );

  return swipeEdgeWidth;
};

export { useNavigationExperience, useDisableGoBackOnValueTruthiness, useSwipeEdgeWidth };
