import { StyleSheet } from "react-native";
import { ScreenContainer, ScreenSubContainer } from "components/atoms";
import { ScrollView } from "tamagui";
import { Offers } from "components/organisms";
import { MembershipStackReactNavigationProps } from "navigation";

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    flexGrow: 1,
  },
});

type OffersListScreenProps = MembershipStackReactNavigationProps<"OffersListScreen">;

const OffersListScreen = ({
  route: {
    params: { category },
  },
}: OffersListScreenProps) => (
  <ScreenContainer>
    <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
      <ScreenSubContainer paddingVertical={"$6"} space={"$6"}>
        <Offers category={category} />
      </ScreenSubContainer>
    </ScrollView>
  </ScreenContainer>
);

export { OffersListScreen };
