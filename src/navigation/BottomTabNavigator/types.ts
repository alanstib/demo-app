import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

type BottomTabNavigatorParamList = {
  HomeTabStackNavigator: undefined;
  MembershipTabStackNavigator: undefined;
  PointsTabStackNavigator: undefined;
  ClaimsScreen: undefined;
};

type BottomTabNavigatorRouteName = keyof BottomTabNavigatorParamList;

type BottomTabReactNavigationProps<S extends BottomTabNavigatorRouteName> =
  BottomTabScreenProps<BottomTabNavigatorParamList, S>;

export type { BottomTabNavigatorParamList, BottomTabReactNavigationProps };
