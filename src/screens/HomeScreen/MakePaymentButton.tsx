import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { SecondaryButton } from "components/molecules";

type MakePaymentButtonProps = { hasExistingPaymentMethods: boolean };

const MakePaymentButton = ({ hasExistingPaymentMethods }: MakePaymentButtonProps) => {
  const navigation = useNavigation();

  const handleNavigate = useCallback(() => {
    if (hasExistingPaymentMethods) {
      navigation.navigate("MakePaymentScreen");
    } else {
      navigation.navigate("BankAccountScreen");
    }
  }, [hasExistingPaymentMethods, navigation]);

  return <SecondaryButton onPress={handleNavigate}>{"Make a Payment"}</SecondaryButton>;
};

export { MakePaymentButton };
