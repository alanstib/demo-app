import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { IconName } from "assets/icons";
import { Icon } from "components/atoms";
import { getColorValue } from "theme/utils";
import { OfferDetailBottomSheet } from "components/organisms";
import { MembershipTabStackNavigator } from "navigation/MembershipTabStackNavigator";
import { HomeTabStackNavigator } from "navigation/HomeTabStackNavigator";
import { BottomTabNavigatorParamList } from "./types";

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator = () => (
  <>
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: getColorValue("black"), borderTopWidth: 0 },
        tabBarLabel: () => null,
        tabBarIcon: ({ focused }) => {
          let iconName: IconName;

          switch (route.name) {
            case "HomeTabStackNavigator":
              iconName = "home";
              break;
            case "MembershipTabStackNavigator":
              iconName = "membership";
              break;
          }

          return (
            <Icon
              iconName={iconName}
              height={22}
              resizeMode={"contain"}
              tintColor={focused ? "white" : "white30"}
            />
          );
        },
        headerShadowVisible: false,
        headerTitle: "",
        headerStyle: {
          backgroundColor: getColorValue("black"),
        },
      })}
    >
      <BottomTab.Screen
        options={{ headerShown: false }}
        name={"HomeTabStackNavigator"}
        component={HomeTabStackNavigator}
      />
      <BottomTab.Screen
        name={"MembershipTabStackNavigator"}
        component={MembershipTabStackNavigator}
        options={{ headerStatusBarHeight: 0 }}
      />
    </BottomTab.Navigator>

    <OfferDetailBottomSheet />
  </>
);

export { BottomTabNavigator };
