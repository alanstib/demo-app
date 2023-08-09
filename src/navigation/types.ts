import { BottomTabNavigatorParamList } from "./BottomTabNavigator";
import { HomeTabStackNavigatorParamList } from "./HomeTabStackNavigator";
import { PointsTabStackNavigatorParamList } from "./PointsTabStackNavigator";
import { MembershipTabStackNavigatorParamList } from "./MembershipTabStackNavigator";
import { RootStackNavigatorParamList } from "./RootStackNavigator";

type NavigationExperience = "logged in" | "logged out";

// The pattern here is to import the ParamList for all new Navigators and add them to the `AllNavigationParamLists` intersection type
type AllNavigationParamLists = RootStackNavigatorParamList &
  BottomTabNavigatorParamList &
  HomeTabStackNavigatorParamList &
  PointsTabStackNavigatorParamList &
  MembershipTabStackNavigatorParamList;
type AppNavigationScreenName = keyof AllNavigationParamLists;

/* May be helpful later

type AppScreenRouteProp<S extends AppNavigationScreenName> = RouteProp<
  AllNavigationParamLists,
  S
>; */

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AllNavigationParamLists {}
  }
}

export type { AllNavigationParamLists, NavigationExperience, AppNavigationScreenName };
