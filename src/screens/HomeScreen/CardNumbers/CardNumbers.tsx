import { StyleSheet } from "react-native";
import { Body1, Body2 } from "components/atoms";
import { Copyable } from "components/molecules";

type CardNumbersProps = {
  formattedCardNumber?: string;
  formattedExpirationDate?: string;
  cvv?: string;
};

const cardNumbersStyles = StyleSheet.create({
  cardNumberContainer: {
    top: "36.25%",
    left: "4.75%",
  },
  expirationDateContainer: {
    top: "54.5%",
    left: "4.75%",
  },
  cvvContainer: {
    top: "54.5%",
    left: "26.75%",
  },
});

const CardNumbers = ({
  formattedCardNumber = "XXXX XXXX XXXX XXXX",
  formattedExpirationDate = "MM/YY",
  cvv = "XXX",
}: CardNumbersProps) => (
  <>
    {/* Card number */}
    <Copyable
      textToCopy={formattedCardNumber}
      style={cardNumbersStyles.cardNumberContainer}
    >
      <Body1 letterSpacing={-0.5} fontWeight={"300"}>
        {formattedCardNumber}
      </Body1>
    </Copyable>

    {/* Expiration date */}
    <Copyable
      textToCopy={formattedExpirationDate}
      style={cardNumbersStyles.expirationDateContainer}
    >
      <Body2 letterSpacing={-0.5} fontWeight={"300"}>
        {formattedExpirationDate}
      </Body2>
    </Copyable>

    {/* CVV code */}
    <Copyable textToCopy={"XXXX"} style={cardNumbersStyles.cvvContainer}>
      <Body2 letterSpacing={-0.5} fontWeight={"300"}>
        {cvv}
      </Body2>
    </Copyable>
  </>
);

export { CardNumbers, cardNumbersStyles };
