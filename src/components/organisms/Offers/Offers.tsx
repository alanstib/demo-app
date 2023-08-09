import { ErrorUI, Offer } from "components/molecules";
import { OfferCategory } from "services/graphql/generated";
import { XStack } from "tamagui";
import { getSpaceValue } from "theme/utils";
import { useOfferDetailBottomSheetStore } from "services/zustand";
import { useOffersForMembership } from "./hooks";
import { LoadingPlaceholder } from "./LoadingPlaceholder";

type OffersProps = {
  category: OfferCategory;
  maxOffers?: number;
};

const Offers = ({ category, maxOffers }: OffersProps) => {
  const { offers, loading, error, refetch } = useOffersForMembership(category);

  const setOffer = useOfferDetailBottomSheetStore((state) => state.setOffer);

  return (
    <XStack gap={getSpaceValue(6)} flexWrap={"wrap"}>
      {loading ? (
        <LoadingPlaceholder />
      ) : error ? (
        <ErrorUI bodyText={"We couldn't load your offers."} handleTryAgain={refetch} />
      ) : (
        <>
          {offers.slice(0, maxOffers).map((offer) => {
            if (offer.hypercardMerchant == null) {
              return null;
            }

            const logoImageUrl = offer.hypercardMerchant.logoImageUrl;

            return (
              <Offer
                imageSrc={logoImageUrl}
                title={offer.title}
                subtitle={offer.details}
                key={offer.identifier}
                onPress={() =>
                  setOffer({
                    title: offer.title,
                    subtitle: offer.longDetails ?? offer.details,
                    imageSrc: logoImageUrl,
                    flairText: "TRENDING",
                    category,
                  })
                }
              />
            );
          })}
        </>
      )}
    </XStack>
  );
};

export { Offers };
