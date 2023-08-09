import { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  BottomSheetFlatListProps,
  BottomSheetSectionListProps,
} from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetScrollable/types";

type BaseBottomSheetRef = {
  handleClosePress: () => void;
  handleOpenPress: () => void;
};

type BottomSheetViewProps = Partial<Parameters<typeof BottomSheetView>[0]>;

export type {
  BaseBottomSheetRef,
  BottomSheetViewProps,
  BottomSheetFlatListProps,
  BottomSheetSectionListProps,
};
