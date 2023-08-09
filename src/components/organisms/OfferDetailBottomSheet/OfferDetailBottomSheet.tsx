import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Spacer, XStack, YStack } from "tamagui";
import {
  Body1,
  BottomSheetWithView,
  Header3,
  Icon,
  RemoteImage,
  Touchable,
  TagItem,
} from "components/atoms";
import { useBottomSheetWithControls } from "components/atoms/bottom-sheets/hooks";
import { CONTENT_HEIGHT } from "components/atoms/bottom-sheets/constants";
import { getSpaceValue } from "theme/utils";
import { PrimaryButton, TextButton } from "components/molecules";
import { useOfferDetailBottomSheetStore } from "services/zustand";
import { shallow } from "zustand/shallow";
import { OfferCategory } from "services/graphql/generated";

const styles = StyleSheet.create({
  restaurantImage: {
    width: "100%",
    borderRadius: 2,
  },
});

const OfferDetailBottomSheet = () => {
  const { sheetRef, handleCloseBottomSheet, handleOpenBottomSheet } =
    useBottomSheetWithControls();

  const { offer, setOffer } = useOfferDetailBottomSheetStore(
    (state) => ({
      offer: state.offer,
      setOffer: state.setOffer,
    }),
    shallow,
  );

  useEffect(() => {
    if (offer) {
      handleOpenBottomSheet();
    } else {
      handleCloseBottomSheet();
    }
  }, [offer, handleOpenBottomSheet, handleCloseBottomSheet]);

  // This is only true after the animation of closing is complete
  // Since we only call `close` on the `onClose` method which is after the animation
  if (!offer) {
    return null;
  }

  return (
    <BottomSheetWithView
      index={0}
      ref={sheetRef}
      snapPoints={[CONTENT_HEIGHT]}
      onClose={() => setOffer(undefined)}
    >
      <YStack paddingHorizontal={"$6"}>
        {offer.category !== OfferCategory.Dining ? (
          <XStack justifyContent={"space-between"}>
            <RemoteImage
              resizeMode={"contain"}
              width={64}
              height={64}
              borderRadius={2}
              // TODO
              // Rushil will make this not nullable
              uri={offer.imageSrc!}
            />
            <Touchable onPress={handleCloseBottomSheet}>
              <Icon iconName={"x"} width={12} tintColor={"white"} />
            </Touchable>
          </XStack>
        ) : (
          <>
            <RemoteImage
              resizeMode={"cover"}
              width={0}
              style={styles.restaurantImage}
              height={getSpaceValue(16)}
              borderRadius={2}
              // TODO
              // Rushil will make this not nullable
              uri={offer.imageSrc!}
            />
            <Spacer size={"$6"} />
          </>
        )}
        <Spacer size={"$7"} />
        <XStack alignItems={"center"} gap={getSpaceValue(6)}>
          <Header3 color={"$white"}>{offer.title}</Header3>
          <TagItem>{offer.flairText}</TagItem>
        </XStack>
        <Spacer size={"$6"} />
        <Body1 color={"$white70"}>{offer.subtitle}</Body1>
        <Spacer size={"$8"} />
        {offer.category !== OfferCategory.Dining ? (
          <PrimaryButton>{"Open App"}</PrimaryButton>
        ) : null}
        <Spacer size={"$4"} />
        <TextButton>{"Leave Feedback"}</TextButton>
      </YStack>
    </BottomSheetWithView>
  );
};

export { OfferDetailBottomSheet };
