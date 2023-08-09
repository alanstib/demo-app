import { OfferCategory } from "services/graphql/generated";
import { create } from "zustand";

type Offer = {
  imageSrc: string | null | undefined;
  title: string;
  flairText: string;
  subtitle: string;
  category: OfferCategory;
};

type OfferDetailBottomSheetState = {
  offer: Offer | undefined;
  setOffer: (offer: Offer | undefined) => void;
};

const useOfferDetailBottomSheetStore = create<OfferDetailBottomSheetState>()((set) => ({
  offer: undefined,
  setOffer: (offer) => set({ offer }),
}));

export { useOfferDetailBottomSheetStore };
