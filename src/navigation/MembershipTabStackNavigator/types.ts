import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { OfferCategory } from "services/graphql/generated";

type MembershipTabStackNavigatorParamList = {
  MembershipTopTabNavigator: undefined;
  OffersListScreen: { category: OfferCategory };
};

type MembershipStackNavigatorRouteName = keyof MembershipTabStackNavigatorParamList;

type MembershipStackReactNavigationProps<S extends MembershipStackNavigatorRouteName> =
  NativeStackScreenProps<MembershipTabStackNavigatorParamList, S>;

export type { MembershipTabStackNavigatorParamList, MembershipStackReactNavigationProps };
