import {
  AspectImage,
  Body1,
  Caption,
  Header1,
  RemoteImage,
  ScreenContainer,
  ScreenSubContainer,
  Touchable,
} from "components/atoms";
import { Spacer, Stack } from "tamagui";
import { HomeTabStackReactNavigationProps } from "navigation/HomeTabStackNavigator/types";
import { ErrorUI } from "components/molecules";
import { useTransactionsBottomSheetStore } from "services/zustand";
import { useLayoutAnimationOnChange } from "utils";
import { FlipCard, FlipSide } from "components/molecules/FlipCard";
import { LoadingPlaceholder } from "./LoadingPlaceholder";
import { TransactionsBottomSheet } from "./TransactionsBottomSheet";
import { MakePaymentButton } from "./MakePaymentButton";
import { useAccountDetailsForHome, useCardVisibility } from "./hooks";
import {
  CardNumbers,
  LoadingPlaceholder as CardNumbersLoadingPlaceholder,
} from "./CardNumbers";
import { CARD_IMAGE_ASPECT_RATIO, CARD_IMAGE_WIDTH, styles } from "./styles";
import { GlassVideo } from "./GlassVideo";

type HomeScreenProps = HomeTabStackReactNavigationProps<"HomeScreen">;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const {
    isFrontOfCardVisible,
    handleFlipCard,
    maybePrimaryCardData,
    loading: isPrimaryCardDataLoading,
  } = useCardVisibility(navigation);

  const {
    loading,
    error,
    currentBalance,
    creditLimit,
    refetch,
    hasExistingPaymentMethods,
    cardArt,
  } = useAccountDetailsForHome();

  const setHomeScreenContentY = useTransactionsBottomSheetStore(
    (state) => state.setHomeScreenContentY,
  );

  useLayoutAnimationOnChange(loading);

  return (
    <>
      <ScreenContainer>
        <GlassVideo />
        {loading ? (
          <LoadingPlaceholder />
        ) : error ? (
          <ScreenSubContainer flex={1} justifyContent={"center"} alignItems={"center"}>
            <ErrorUI
              bodyText={"We couldn't load your account information."}
              handleTryAgain={refetch}
            />
          </ScreenSubContainer>
        ) : (
          <>
            <ScreenSubContainer alignItems={"center"}>
              <Spacer size={"$4"} />
              <Caption color={"$white70"}>{"BALANCE"}</Caption>
              <Spacer size={"$2"} />
              <Header1 textAlign={"center"} color={"white"}>
                {currentBalance}
              </Header1>
              <Spacer size={"$5"} />
              <Body1
                color={"$white70"}
                fontWeight={"300"}
              >{`Credit limit: ${creditLimit}`}</Body1>
              <Spacer size={"$6"} />
              <Touchable onPress={handleFlipCard} pressStyle={undefined}>
                {cardArt ? (
                  <FlipCard
                    style={styles.flipCard}
                    side={isFrontOfCardVisible ? FlipSide.FRONT : FlipSide.BACK}
                    front={
                      <RemoteImage
                        width={CARD_IMAGE_WIDTH}
                        aspectRatio={CARD_IMAGE_ASPECT_RATIO}
                        uri={cardArt.frontImageUrl}
                      />
                    }
                    back={
                      <Stack>
                        <RemoteImage
                          width={CARD_IMAGE_WIDTH}
                          aspectRatio={CARD_IMAGE_ASPECT_RATIO}
                          uri={cardArt.backImageUrl}
                        />
                        {isPrimaryCardDataLoading ? (
                          <CardNumbersLoadingPlaceholder />
                        ) : (
                          <CardNumbers
                            formattedCardNumber={
                              maybePrimaryCardData?.formattedCardNumber
                            }
                            formattedExpirationDate={
                              maybePrimaryCardData?.formattedExpirationDate
                            }
                            cvv={maybePrimaryCardData?.cvv}
                          />
                        )}
                      </Stack>
                    }
                  />
                ) : (
                  <AspectImage imageName={"default-hypercard"} width={CARD_IMAGE_WIDTH} />
                )}
              </Touchable>

              <Spacer size={"$6"} />
              <MakePaymentButton hasExistingPaymentMethods={hasExistingPaymentMethods} />
              <Spacer size={"$6"} />
              <Stack onLayout={setHomeScreenContentY} />
            </ScreenSubContainer>
          </>
        )}
      </ScreenContainer>
      <TransactionsBottomSheet />
    </>
  );
};

export { HomeScreen };
