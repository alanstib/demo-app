// Easier to do inline styles for this one since we can't use Tamagui props for css

import { StyleSheet } from "react-native";
import { PlaceholderTexts } from "components/atoms";
import { Fade, Placeholder } from "rn-placeholder";
import { cardNumbersStyles } from "./CardNumbers";

const styles = StyleSheet.create({
  placeholder: {
    position: "absolute",
  },
  cardNumberPlaceholder: {
    width: "50%",
  },
  expirationDatePlaceholder: {
    width: "16.75%",
  },
  cvvPlaceholder: { width: "11%" },
});

const LoadingPlaceholder = () => (
  <Placeholder Animation={Fade}>
    <PlaceholderTexts.Body1
      style={[
        styles.placeholder,
        cardNumbersStyles.cardNumberContainer,
        styles.cardNumberPlaceholder,
      ]}
    />
    <PlaceholderTexts.Body2
      style={[
        styles.placeholder,
        cardNumbersStyles.expirationDateContainer,
        styles.expirationDatePlaceholder,
      ]}
    />
    <PlaceholderTexts.Body2
      style={[styles.placeholder, cardNumbersStyles.cvvContainer, styles.cvvPlaceholder]}
    />
  </Placeholder>
);

export { LoadingPlaceholder };
