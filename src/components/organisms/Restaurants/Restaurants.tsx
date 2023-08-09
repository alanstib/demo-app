import { OfferCategory, RestaurantCity } from "services/graphql/generated";
import { useOfferDetailBottomSheetStore } from "services/zustand";
import { ErrorUI, Restaurant } from "components/molecules";
import { Spacer } from "tamagui";
import { Body1, Body2, Caption } from "components/atoms";
import { useRestaurants } from "./hooks";
import { LoadingPlaceholder } from "./LoadingPlaceholder";

const Restaurants = () => {
  const { restaurants, loading, error, refetch } = useRestaurants(RestaurantCity.NewYork);

  const setOffer = useOfferDetailBottomSheetStore((state) => state.setOffer);

  return (
    <>
      {loading ? (
        <LoadingPlaceholder />
      ) : error ? (
        <ErrorUI
          bodyText={"We couldn't load your restaurant offers."}
          handleTryAgain={refetch}
        />
      ) : (
        <>
          <Body1 fontWeight={"600"} color={"$white"}>
            {"Restaurant Experiences"}
          </Body1>
          <Spacer size={"$4"} />
          <Body2 color={"$white50"}>
            {
              "Cardholders receive complimentary food and drink on check-out. Tell your waiter that you are paying with a Hypercard and let the staff take care of the rest. "
            }
          </Body2>
          <Spacer size={"$8"} />
          <Caption size={"$1"} color={"$white50"}>
            {"COMPLIMENTARY DESSERT"}
          </Caption>
          <Spacer size={"$5"} />
          {restaurants.map((restaurant, index) => {
            if (!restaurant.restaurantOffer) {
              return null;
            }

            const { primaryImageUrl, location } = restaurant.restaurantOffer;

            return (
              <>
                {index !== 0 ? <Spacer size={"$7"} /> : null}
                <Restaurant
                  imageUri={primaryImageUrl}
                  title={restaurant.title}
                  subtitle={location}
                  onPress={() =>
                    setOffer({
                      title: restaurant.title,
                      subtitle: restaurant.details,
                      imageSrc: restaurant.restaurantOffer?.secondaryImageUrl,
                      flairText: "MANUALLY APPLIED",
                      category: OfferCategory.Dining,
                    })
                  }
                />
              </>
            );
          })}
        </>
      )}
    </>
  );
};

export { Restaurants };
