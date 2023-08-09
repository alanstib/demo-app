import { useEffect } from "react";
import { StyleSheet } from "react-native";
import {
  Body1,
  Body2,
  Caption,
  Header2,
  Icon,
  ScreenContainer,
  ScreenSubContainer,
  Touchable,
} from "components/atoms";
import { ErrorUI } from "components/molecules";
import { PrimaryButton } from "components/molecules/buttons";
import { HomeTabStackReactNavigationProps } from "navigation/HomeTabStackNavigator/types";
import { ScrollView, Spacer, XStack, YStack } from "tamagui";
import { useLayoutAnimationOnChange } from "utils";
import { CreditIndicator } from "services/graphql/generated";
import { PointsWheel } from "./PointsWheel";
import { useTransactionById } from "./hooks";
import { LoadingPlaceholder } from "./LoadingPlaceholder";

const styles = StyleSheet.create({
  scrollViewContentContainer: {
    flexGrow: 1,
  },
});

type TransactionDetailScreenProps =
  HomeTabStackReactNavigationProps<"TransactionDetailScreen">;

const TransactionDetailScreen = ({
  navigation,
  route: {
    params: { transactionId },
  },
}: TransactionDetailScreenProps) => {
  const {
    loading,
    error,
    networkStatus,
    refetch,
    categoryName,
    merchantName,
    formattedTransactionDate,
    formattedDollars,
    status,
    last4OfCard,
    rewardDescription,
    areButtonsDisabled,
    disputeStatus,
    creditIndicator,
  } = useTransactionById(transactionId);

  useLayoutAnimationOnChange(networkStatus);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        loading || disputeStatus ? (
          <></>
        ) : (
          <Touchable
            flexDirection={"row"}
            onPress={() =>
              navigation.navigate("DisputeReasonsScreen", {
                transactionId,
              })
            }
          >
            <Icon tintColor={"white70"} iconName={"report"} width={20} />
            <Spacer size={"$4"} />
            <Body1 color={"$white70"}>{"Report"}</Body1>
          </Touchable>
        ),
    });
  }, [disputeStatus, navigation, transactionId, loading]);

  return (
    <>
      <ScreenContainer>
        <Spacer size={"$8"} />
        {loading ? (
          <LoadingPlaceholder />
        ) : error ? (
          <ScreenSubContainer flex={1} justifyContent={"center"} alignItems={"center"}>
            <ErrorUI
              bodyText={"We couldn't load your transaction."}
              handleTryAgain={refetch}
            />
          </ScreenSubContainer>
        ) : (
          <ScrollView
            contentContainerStyle={styles.scrollViewContentContainer}
            showsVerticalScrollIndicator={false}
          >
            <ScreenSubContainer alignItems={"center"}>
              <Caption color={"$white70"}>{categoryName}</Caption>
              <Spacer size={"$4"} />
              <Header2 color={"$white"} textAlign={"center"}>
                {merchantName}
              </Header2>
              <Spacer size={"$4"} />
              <Body2 fontWeight={"500"} color={"$white70"}>
                {formattedTransactionDate}
              </Body2>
              <Spacer size={"$6"} />
              <Header2 color={"$white"}>
                {`${
                  creditIndicator === CreditIndicator.Credit ? "+" : ""
                }${formattedDollars}`}
              </Header2>
              <Spacer size={"$9"} />
            </ScreenSubContainer>
            <PointsWheel />
            <ScreenSubContainer alignItems={"center"}>
              {rewardDescription ? (
                <>
                  <Spacer size={"$4"} />
                  <Body2 color={"$white70"}>{`${rewardDescription} earned`}</Body2>
                </>
              ) : null}

              <Spacer size={"$9"} />
              <XStack width={"$full"} justifyContent={"space-between"}>
                <Body1 fontWeight={"500"} color={"$white"} textTransform={"capitalize"}>
                  {"Status"}
                </Body1>
                <Body1 fontWeight={"500"} color={"$white70"} textTransform={"capitalize"}>
                  {status}
                </Body1>
              </XStack>
              <Spacer size={"$7"} />
              <XStack width={"$full"} justifyContent={"space-between"}>
                <Body1 fontWeight={"500"} color={"$white"} textTransform={"capitalize"}>
                  {"Card Details"}
                </Body1>
                <Body1 fontWeight={"500"} color={"$white70"} textTransform={"capitalize"}>
                  {last4OfCard}
                </Body1>
              </XStack>
              <Spacer size={"$7"} />
              {disputeStatus ? (
                <XStack width={"$full"} justifyContent={"space-between"}>
                  <Body1 fontWeight={"500"} color={"$white"} textTransform={"capitalize"}>
                    {"Dispute Status"}
                  </Body1>
                  <Body1
                    fontWeight={"500"}
                    color={"$white70"}
                    textTransform={"capitalize"}
                  >
                    {disputeStatus}
                  </Body1>
                </XStack>
              ) : null}
            </ScreenSubContainer>
          </ScrollView>
        )}
        <YStack />
      </ScreenContainer>
      <ScreenSubContainer backgroundColor={"$black"}>
        <PrimaryButton
          disabled={areButtonsDisabled}
          backgroundColor={"$black"}
          color={"$white50"}
        >
          {"Apply travel stipend"}
        </PrimaryButton>
        <Spacer size={"$4"} />
        <PrimaryButton disabled={areButtonsDisabled}>
          {"Request reimbursement"}
        </PrimaryButton>
        <Spacer size={"$7"} />
      </ScreenSubContainer>
    </>
  );
};

export { TransactionDetailScreen };
