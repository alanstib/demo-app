import {
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
  useImperativeHandle,
  useMemo,
} from "react";
import { FlatListProps, StyleSheet, useWindowDimensions } from "react-native";
import BaseBottomSheet, {
  BottomSheetFlatList,
  BottomSheetProps as BaseBottomSheetProps,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import { YStack } from "tamagui";
import {
  useBottomSheetBackHandler,
  useBaseBottomSheetRef,
  useBottomSheetSafeAreaStyle,
} from "../hooks";
import { BottomSheetFlatListProps, BaseBottomSheetRef } from "../types";
import { INITIAL_SNAP_POINTS } from "../constants";
import { BackgroundBlurView } from "../BackgroundBlurView";
import { bottomSheetStyles } from "../styles";

type BottomSheetWithFlatListProps<T> = Omit<
  BaseBottomSheetProps,
  "snapPoints" | "children"
> &
  Partial<BaseBottomSheetProps> & {
    data: T[];
    renderItem: BottomSheetFlatListProps<T>["renderItem"];
    bottomSheetFlatListProps?: Omit<
      BottomSheetFlatListProps<T>,
      "data" | "renderItem" | "style"
    > & {
      style?: FlatListProps<T>["style"];
    };
    ignoreSafeArea?: boolean;
    snapPoints?: (string | number)[];
    children?: BaseBottomSheetProps["children"];
    HeaderComponent?: ReactNode;
    /**
     * The maximum proportion of the `windowHeight` that the content in this bottom sheet can be.
     *
     * **IMPORTANT:** If you are adding `children`, the height of `(BottomSheetFlatList + children)` must be less than `windowHeight`. Otherwise, auto-sizing will not work.
     */
    maxProportionOfWindowHeight?: number;
  };

const BottomSheetWithFlatListWithoutRef = <T,>(
  {
    bottomSheetFlatListProps,
    data,
    renderItem,
    index = -1,
    onChange,
    ignoreSafeArea,
    maxProportionOfWindowHeight = 0.7,
    children,
    snapPoints = INITIAL_SNAP_POINTS,
    HeaderComponent,
    ...props
  }: BottomSheetWithFlatListProps<T>,
  ref: ForwardedRef<BaseBottomSheetRef>,
) => {
  const { height: windowHeight } = useWindowDimensions();
  const { bottomSheetRef, handleOpenPress, handleClosePress, renderBackdrop } =
    useBaseBottomSheetRef();
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(snapPoints);

  const contentContainerStyle = useBottomSheetSafeAreaStyle(
    bottomSheetFlatListProps?.contentContainerStyle,
    ignoreSafeArea,
  );

  const handleSheetChange = useBottomSheetBackHandler(index, handleClosePress, onChange);

  const flatListStyle = useMemo(
    () =>
      StyleSheet.flatten([
        { maxHeight: windowHeight * maxProportionOfWindowHeight },
        bottomSheetFlatListProps?.style,
      ]),
    [bottomSheetFlatListProps?.style, windowHeight, maxProportionOfWindowHeight],
  );

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
      handleIndicatorStyle={bottomSheetStyles.handleIndicator}
      contentHeight={animatedContentHeight}
      animateOnMount={true}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      ref={bottomSheetRef}
      onChange={handleSheetChange}
      style={bottomSheetStyles.baseBottomSheet}
      backgroundComponent={BackgroundBlurView}
      {...props}
    >
      <YStack onLayout={handleContentLayout}>
        <>
          {HeaderComponent}
          <BottomSheetFlatList
            {...bottomSheetFlatListProps}
            style={flatListStyle}
            contentContainerStyle={contentContainerStyle}
            data={data}
            renderItem={renderItem}
          />
          {children}
        </>
      </YStack>
    </BaseBottomSheet>
  );
};

const BottomSheetWithFlatList = forwardRef(BottomSheetWithFlatListWithoutRef) as <T>(
  props: BottomSheetWithFlatListProps<T> & {
    ref: ForwardedRef<BaseBottomSheetRef | null>;
  },
) => ReactElement;

export { BottomSheetWithFlatList };
export type { BaseBottomSheetRef, BottomSheetWithFlatListProps };
