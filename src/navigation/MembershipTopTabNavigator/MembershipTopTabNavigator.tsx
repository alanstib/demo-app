import { StyleSheet } from "react-native";
import { XStack } from "tamagui";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Header2, Touchable } from "components/atoms";
import { getColorValue } from "theme/utils";
import { LifestyleScreen, WellnessScreen } from "screens";

const styles = StyleSheet.create({
  topTabNavigator: {
    backgroundColor: getColorValue("black"),
  },
});

type TopTabNavigatorParamList = {
  LifestyleScreen: undefined;
  WellnessScreen: undefined;
};

const TopTab = createMaterialTopTabNavigator<TopTabNavigatorParamList>();

const MembershipTopTabNavigator = () => (
  <TopTab.Navigator
    style={styles.topTabNavigator}
    tabBar={({ state, navigation }) => (
      <XStack space={"$6"} paddingHorizontal={"$6"} paddingBottom={"$6"}>
        {state.routes.map((route, index) => {
          let tabLabel: string;
          const routeName = route.name as keyof TopTabNavigatorParamList;

          switch (routeName) {
            case "LifestyleScreen":
              tabLabel = "Lifestyle";
              break;
          }

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(routeName);
            }
          };

          return (
            <Touchable onPress={onPress}>
              <Header2 color={isFocused ? "$white" : "$white50"}>{tabLabel}</Header2>
            </Touchable>
          );
        })}
      </XStack>
    )}
    screenOptions={{ lazy: true }}
  >
    <TopTab.Screen name={"LifestyleScreen"} component={LifestyleScreen} />
    <TopTab.Screen name={"WellnessScreen"} component={WellnessScreen} />
  </TopTab.Navigator>
);

export { MembershipTopTabNavigator };
