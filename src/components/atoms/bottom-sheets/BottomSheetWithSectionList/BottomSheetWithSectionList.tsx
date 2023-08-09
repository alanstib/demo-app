import {
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
  useImperativeHandle,
  useMemo,
} from "react";
import {
  SectionListData,
  SectionListProps,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import BaseBottomSheet, {
  BottomSheetSectionList,
  BottomSheetProps as BaseBottomSheetProps,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import { YStack } from "tamagui";
import {
  useBottomSheetBackHandler,
  useBaseBottomSheetRef,
  useBottomSheetSafeAreaStyle,
} from "../hooks";
import { BottomSheetSectionListProps, BaseBottomSheetRef } from "../types";
import { INITIAL_SNAP_POINTS } from "../constants";
import { BackgroundBlurView } from "../BackgroundBlurView";
import { bottomSheetStyles } from "../styles";

type BottomSheetWithSectionListProps<ItemT, SectionT> = Omit<
  BaseBottomSheetProps,
  "snapPoints" | "children"
> &
  Partial<BaseBottomSheetProps> & {
    sections: SectionListData<ItemT, SectionT>[];
    renderItem: BottomSheetSectionListProps<ItemT, SectionT>["renderItem"];
    bottomSheetSectionListProps?: Omit<
      BottomSheetSectionListProps<ItemT, SectionT>,
      "sections" | "renderItem" | "style"
    > & {
      style?: SectionListProps<ItemT, SectionT>["style"];
    };
    ignoreSafeArea?: boolean;
    snapPoints?: (string | number)[];
    children?: BaseBottomSheetProps["children"];
    HeaderComponent?: ReactNode;
    /**
     * The maximum proportion of the `windowHeight` that the content in this bottom sheet can be.
     *
     * **IMPORTANT:** If you are adding `children`, the height of `(BottomSheetSectionList + children)` must be less than `windowHeight`. Otherwise, auto-sizing will not work.
     */
    maxProportionOfWindowHeight?: number;
  };

const BottomSheetWithSectionListWithoutRef = <ItemT, SectionT>(
  {
    bottomSheetSectionListProps,
    sections,
    renderItem,
    index = -1,
    onChange,
    ignoreSafeArea,
    maxProportionOfWindowHeight = 0.7,
    children,
    snapPoints = INITIAL_SNAP_POINTS,
    HeaderComponent,
    ...props
  }: BottomSheetWithSectionListProps<ItemT, SectionT>,
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
    bottomSheetSectionListProps?.contentContainerStyle,
    ignoreSafeArea,
  );

  const handleSheetChange = useBottomSheetBackHandler(index, handleClosePress, onChange);

  const flatListStyle = useMemo(
    () =>
      StyleSheet.flatten([
        { maxHeight: windowHeight * maxProportionOfWindowHeight },
        bottomSheetSectionListProps?.style,
      ]),
    [bottomSheetSectionListProps?.style, windowHeight, maxProportionOfWindowHeight],
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
          <BottomSheetSectionList
            {...bottomSheetSectionListProps}
            style={flatListStyle}
            contentContainerStyle={contentContainerStyle}
            sections={sections}
            renderItem={renderItem}
          />
          {children}
        </>
      </YStack>
    </BaseBottomSheet>
  );
};

const BottomSheetWithSectionList = forwardRef(BottomSheetWithSectionListWithoutRef) as <
  ItemT,
  SectionT,
>(
  props: BottomSheetWithSectionListProps<ItemT, SectionT> & {
    ref: ForwardedRef<BaseBottomSheetRef | null>;
  },
) => ReactElement;

export { BottomSheetWithSectionList };
export type { BaseBottomSheetRef, BottomSheetWithSectionListProps };
