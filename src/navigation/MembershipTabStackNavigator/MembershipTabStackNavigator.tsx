import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header3 } from "components/atoms";
import { MembershipTopTabNavigator } from "navigation/MembershipTopTabNavigator";
import { OffersListScreen } from "screens";
import { getColorValue } from "theme/utils";
import { MembershipTabStackNavigatorParamList } from "./types";

const Stack = createNativeStackNavigator<MembershipTabStackNavigatorParamList>();

const MembershipTabStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: "",
      headerBackTitleVisible: false,
      headerBackButtonMenuEnabled: false,
      headerStyle: {
        backgroundColor: getColorValue("black"),
      },
      headerTintColor: getColorValue("white"),
    }}
  >
    <Stack.Screen
      name={"MembershipTopTabNavigator"}
      component={MembershipTopTabNavigator}
    />
    <Stack.Screen
      options={{
        headerTitle: () => <Header3 color={"$white"}>{"Perks"}</Header3>,
      }}
      name={"OffersListScreen"}
      component={OffersListScreen}
    />
  </Stack.Navigator>
);

export { MembershipTabStackNavigator };
