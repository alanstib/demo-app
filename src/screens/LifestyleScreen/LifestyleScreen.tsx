import { StyleSheet } from "react-native";
import { ScreenContainer, ScreenSubContainer } from "components/atoms";
import { Offers, OffersHeader, Restaurants } from "components/organisms";
import { OfferCategory } from "services/graphql/generated";
import { ScrollView, Spacer } from "tamagui";

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    flexGrow: 1,
  },
});

const LifestyleScreen = () => (
  <ScreenContainer>
    <ScrollView
      contentContainerStyle={styles.scrollViewContentContainer}
      showsVerticalScrollIndicator={false}
    >
      <ScreenSubContainer paddingVertical={"$6"}>
        <OffersHeader category={OfferCategory.Lifestyle} />
        <Spacer size={"$6"} />
        <Offers category={OfferCategory.Lifestyle} maxOffers={4} />
        <Spacer size={"$8"} />
        <Restaurants />
      </ScreenSubContainer>
    </ScrollView>
  </ScreenContainer>
);

export { LifestyleScreen };
