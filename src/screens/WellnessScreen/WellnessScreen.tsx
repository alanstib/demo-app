import { StyleSheet } from "react-native";
import { ScreenContainer, ScreenSubContainer } from "components/atoms";
import { OfferCategory } from "services/graphql/generated";
import { Offers, OffersHeader, Restaurants } from "components/organisms";
import { ScrollView, Spacer } from "tamagui";

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    flexGrow: 1,
  },
});

const WellnessScreen = () => (
  <ScreenContainer>
    <ScrollView
      contentContainerStyle={styles.scrollViewContentContainer}
      showsVerticalScrollIndicator={false}
    >
      <ScreenSubContainer paddingVertical={"$6"} space={"$6"}>
        <OffersHeader category={OfferCategory.Wellness} />
        <Offers category={OfferCategory.Wellness} maxOffers={4} />
        <Spacer size={"$8"} />
        <Restaurants />
      </ScreenSubContainer>
    </ScrollView>
  </ScreenContainer>
);

export { WellnessScreen };
