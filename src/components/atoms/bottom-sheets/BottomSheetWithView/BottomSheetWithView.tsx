import { forwardRef, useImperativeHandle, ForwardedRef } from "react";
import BaseBottomSheet, {
  BottomSheetView,
  BottomSheetProps as BaseBottomSheetProps,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import {
  useBottomSheetBackHandler,
  useBaseBottomSheetRef,
  useBottomSheetSafeAreaStyle,
} from "../hooks";
import { BaseBottomSheetRef, BottomSheetViewProps } from "../types";
import { INITIAL_SNAP_POINTS } from "../constants";
import { BackgroundBlurView } from "../BackgroundBlurView";
import { bottomSheetStyles } from "../styles";

type BottomSheetWithViewProps = Omit<BaseBottomSheetProps, "snapPoints"> &
  Partial<BaseBottomSheetProps> & {
    children: BottomSheetViewProps["children"];
    bottomSheetViewProps?: BottomSheetViewProps;
    ignoreSafeArea?: boolean;
    snapPoints?: (string | number)[];
  };

const BottomSheetWithViewWithoutRef = (
  {
    children,
    bottomSheetViewProps,
    index = -1,
    onChange,
    ignoreSafeArea,
    snapPoints = INITIAL_SNAP_POINTS,
    ...props
  }: BottomSheetWithViewProps,
  ref: ForwardedRef<BaseBottomSheetRef>,
) => {
  const { bottomSheetRef, handleOpenPress, handleClosePress, renderBackdrop } =
    useBaseBottomSheetRef();
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(snapPoints);

  const handleSheetChange = useBottomSheetBackHandler(index, handleClosePress, onChange);

  const style = useBottomSheetSafeAreaStyle(bottomSheetViewProps?.style, ignoreSafeArea);

  // attach the open and closing handlers to the forwarded ref
  useImperativeHandle(ref, () => ({
    handleClosePress,
    handleOpenPress,
  }));

  return (
    <BaseBottomSheet
      index={index}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      animateOnMount={true}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      onChange={handleSheetChange}
      backgroundComponent={BackgroundBlurView}
      handleIndicatorStyle={bottomSheetStyles.handleIndicator}
      style={bottomSheetStyles.baseBottomSheet}
      {...props}
    >
      <BottomSheetView
        {...bottomSheetViewProps}
        onLayout={handleContentLayout}
        style={style}
      >
        {children}
      </BottomSheetView>
    </BaseBottomSheet>
  );
};

const BottomSheetWithView = forwardRef(BottomSheetWithViewWithoutRef);

export { BottomSheetWithView };
export type { BaseBottomSheetRef, BottomSheetWithViewProps };
