import { LayoutChangeEvent } from "react-native";
import { create } from "zustand";

type TransactionsBottomSheetState = {
  homeScreenContentY: number | undefined;
  setHomeScreenContentY: (event: LayoutChangeEvent) => void;
};

const useTransactionsBottomSheetStore = create<TransactionsBottomSheetState>()((set) => ({
  homeScreenContentY: undefined,
  setHomeScreenContentY: (event) =>
    set({ homeScreenContentY: event.nativeEvent.layout.y }),
}));

export { useTransactionsBottomSheetStore };
