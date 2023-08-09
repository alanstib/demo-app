import { useCallback } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Body2, Body1, Touchable, RemoteImage, Icon } from "components/atoms";
import { Spacer, YStack } from "tamagui";
import { formatCurrency, formatDate } from "utils";
import {
  CreditIndicator,
  PaymentTransactionType,
  TransactionStatus,
} from "services/graphql/generated";
import { useNavigation } from "@react-navigation/native";
import { getColorValue, getSpaceValue } from "theme/utils";
import { ListItemProps, isPaymentTransactionType } from "./types";

const ICON_CONTAINER_SIZE = getSpaceValue(8) + getSpaceValue(4);

const styles = StyleSheet.create({
  iconContainer: {
    width: ICON_CONTAINER_SIZE,
    height: ICON_CONTAINER_SIZE,
  },
  iconGradient: {
    position: "absolute",
    width: ICON_CONTAINER_SIZE * 1.1,
    height: ICON_CONTAINER_SIZE,
    borderRadius: 8,
    left: 0,
  },
  rowGradient: {
    position: "absolute",
    width: "100%",
    height: getSpaceValue(10),
    left: 0,
    top: 0,
  },
});

const IconGradient = ({
  isHighlighted,
  isReversedTransaction,
}: {
  isHighlighted: boolean;
  isReversedTransaction: boolean;
}) => {
  const gradientBaseColor = getColorValue(isReversedTransaction ? "red" : "green");
  const whiteColor = getColorValue("white");
  const gradientBaseColor30 = `${gradientBaseColor}30`;
  const gradientBaseColor20 = `${gradientBaseColor}20`;
  const gradientBaseColor10 = `${gradientBaseColor}10`;

  const white12 = `${whiteColor}12`;
  const white6 = `${whiteColor}06`;

  const whiteBlackGradient = [white12, white6];
  const highlightedGradient = [
    gradientBaseColor30,
    gradientBaseColor20,
    gradientBaseColor10,
  ];

  return (
    <LinearGradient
      colors={isHighlighted ? highlightedGradient : whiteBlackGradient}
      style={styles.iconGradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    />
  );
};

const RowGradient = ({
  isHighlighted,
  isReversedTransaction,
}: {
  isHighlighted: boolean;
  isReversedTransaction: boolean;
}) => {
  const gradientBaseColor = getColorValue(isReversedTransaction ? "red" : "green");
  const gradientBaseColor30 = `${gradientBaseColor}40`;
  const gradientBaseColor20 = `${gradientBaseColor}30`;
  const gradientBaseColor00 = `${gradientBaseColor}00`;

  if (isHighlighted) {
    return (
      <LinearGradient
        colors={[
          gradientBaseColor00,
          gradientBaseColor20,
          gradientBaseColor30,
          gradientBaseColor00,
        ]}
        style={styles.rowGradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      />
    );
  }

  return null;
};

const ListItem = (transaction: ListItemProps) => {
  const navigation = useNavigation();

  const isCreditTransaction = isPaymentTransactionType(transaction)
    ? transaction.type === PaymentTransactionType.Regular
    : transaction.creditIndicator === CreditIndicator.Credit;
  const isReversedTransaction = isPaymentTransactionType(transaction)
    ? transaction.type === PaymentTransactionType.Reversal
    : false;

  const readableDate = formatDate(transaction.transactedAt, "MM/dd/yy");
  const shouldShowStatus = isPaymentTransactionType(transaction)
    ? true
    : transaction.transactionStatus !== TransactionStatus.Settled;
  const transactionTypeIcon = isPaymentTransactionType(transaction)
    ? undefined
    : transaction.hypercardCategoryIconUrl;
  const transactionTitle = isPaymentTransactionType(transaction)
    ? isReversedTransaction
      ? "Payment Reversed"
      : "Payment Received"
    : transaction.externalMerchant?.displayName;
  const status = isPaymentTransactionType(transaction)
    ? transaction.paymentStatus
    : transaction.transactionStatus;

  const gradientBaseColor = getColorValue("green");
  const whiteColor = getColorValue("white");

  const handleOnPress = useCallback(() => {
    navigation.navigate("TransactionDetailScreen", { transactionId: transaction.id });
  }, [navigation, transaction.id]);

  return (
    <Touchable
      paddingVertical={"$4"}
      paddingHorizontal={"$5"}
      onPress={handleOnPress}
      flexDirection={"row"}
    >
      <RowGradient
        isHighlighted={isCreditTransaction}
        isReversedTransaction={isReversedTransaction}
      />
      <YStack
        justifyContent={"center"}
        paddingVertical={"$4"}
        paddingHorizontal={"$5"}
        borderRadius={"$2"}
        style={styles.iconContainer}
      >
        <IconGradient
          isHighlighted={isCreditTransaction}
          isReversedTransaction={isReversedTransaction}
        />
        {transactionTypeIcon ? (
          <RemoteImage
            uri={transactionTypeIcon}
            width={20}
            height={20}
            style={{ tintColor: isCreditTransaction ? gradientBaseColor : whiteColor }}
            resizeMode={"contain"}
          />
        ) : (
          <Icon
            iconName={"greenDollar"}
            height={22}
            tintColor={isReversedTransaction ? "error" : undefined}
          />
        )}
      </YStack>
      <Spacer size={"$6"} />
      <YStack flex={1}>
        <Body1 color={"$white90"} numberOfLines={1}>
          {transactionTitle || "Unknown merchant"}
        </Body1>
        <Spacer size={"$2"} />
        <Body2 textTransform={"capitalize"} color={"$white50"}>
          {readableDate}
        </Body2>
      </YStack>
      <Spacer size={"$2"} />
      <YStack alignSelf={"flex-start"}>
        <Body1 color={isCreditTransaction ? "$green" : "$white"}>
          {`${isCreditTransaction ? "+" : ""}${formatCurrency(
            transaction.amountInDollars,
          )}`}
        </Body1>
        {shouldShowStatus ? (
          <>
            <Spacer size={"$2"} />
            <Body2 textTransform={"capitalize"} color={"$white50"}>
              {status}
            </Body2>
          </>
        ) : null}
      </YStack>
    </Touchable>
  );
};

export { ListItem };
