import { useRef, useCallback, useState, useMemo } from "react";
import { Keyboard, ViewStyle } from "react-native";
import { useBackHandler } from "@react-native-community/hooks";
import BaseBottomSheet, { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FixedBackdrop } from "./FixedBackdrop";
import {
  BaseBottomSheetRef,
  BottomSheetFlatListProps,
  BottomSheetViewProps,
} from "./types";

const useBaseBottomSheetRef = () => {
  const [hasExpandedAtLeastOnce, setHasExpandedAtLeastOnce] = useState(false);

  const bottomSheetRef = useRef<BaseBottomSheet>(null);

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const handleOpenPress = useCallback(() => {
    bottomSheetRef.current?.expand();
    setHasExpandedAtLeastOnce(true);
  }, []);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => {
      /*
       *
       * As of "@gorhom/bottom-sheet@4.1.5" there was a bug on Android where the `BottomSheetBackdrop` component would invisibly overlay the rest of the screen without passing through touch events. This is a workaround.
       * See here for more info: https://github.com/gorhom/react-native-bottom-sheet/issues/701#issuecomment-961296622
       *
       */

      if (!hasExpandedAtLeastOnce) {
        return null;
      }

      return <FixedBackdrop {...props} />;
    },
    [hasExpandedAtLeastOnce],
  );

  return {
    bottomSheetRef,
    handleClosePress,
    handleOpenPress,
    renderBackdrop,
  };
};

const useBottomSheetBackHandler = (
  initialIndex: number,
  handleClosePress: () => void,
  onChange?: (index: number) => void,
) => {
  const currentIndex = useRef(initialIndex);
  const handleSheetChange = useCallback(
    (idx: number) => {
      currentIndex.current = idx;

      if (idx === initialIndex) {
        Keyboard.dismiss();
      }

      onChange?.(idx);
    },
    [onChange, initialIndex],
  );

  useBackHandler(() => {
    if (currentIndex.current !== -1) {
      handleClosePress();
      return true;
    }

    return false;
  });

  return handleSheetChange;
};

const useBottomSheetSafeAreaStyle = <
  T extends unknown,
  Style extends
    | BottomSheetViewProps["style"]
    | BottomSheetFlatListProps<T>["contentContainerStyle"],
>(
  styleFromProp?: Style,
  ignoreSafeArea?: boolean,
) => {
  const { bottom: bottomSafeAreaInset } = useSafeAreaInsets();

  const finalStyle = useMemo(() => {
    const safeAreaStyle: ViewStyle = { paddingBottom: bottomSafeAreaInset };

    if (styleFromProp && !ignoreSafeArea) {
      return [styleFromProp, safeAreaStyle];
    }

    if (styleFromProp && ignoreSafeArea) {
      return styleFromProp;
    }

    if (!ignoreSafeArea) {
      return safeAreaStyle;
    }

    return undefined;
  }, [bottomSafeAreaInset, ignoreSafeArea, styleFromProp]);

  return finalStyle as Style | undefined;
};

const useBottomSheetWithControls = <RefType extends BaseBottomSheetRef>() => {
  const sheetRef = useRef<RefType>(null);

  const handleOpenBottomSheet = useCallback(
    () => sheetRef.current?.handleOpenPress(),
    [],
  );

  const handleCloseBottomSheet = useCallback(
    () => sheetRef.current?.handleClosePress(),
    [],
  );

  return {
    sheetRef,
    handleOpenBottomSheet,
    handleCloseBottomSheet,
  };
};

export { useBottomSheetWithControls };

export { useBaseBottomSheetRef, useBottomSheetBackHandler, useBottomSheetSafeAreaStyle };
