import { useState } from "react";
import { View } from "react-native";
import { BaseInputWithTheme, PrimaryButton } from "components/molecules";
import { BaseToggle, Icon } from "components/atoms";
import { Spacer } from "tamagui";
import { useNewPaymentMethods } from "services/zustand";
import { styles } from "./styles";

const NewCardScreen = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [limit, setLimit] = useState("");

  const setPaymentMethod = useNewPaymentMethods((state) => state.setPaymentMethod);

  const handleSubmit = () => {
    setPaymentMethod({
      name,
      limit,
      cancelation: isChecked,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        <BaseInputWithTheme
          color={"white"}
          placeholder={"Cardholder Name"}
          label={"Card Name"}
          onChangeText={setName}
          value={name}
        />
        <Spacer height={"$6"} />
        <BaseInputWithTheme
          color={"white"}
          placeholder={"0.00"}
          label={"Monthly Limit"}
          onChangeText={setLimit}
          value={limit}
          keyboardType={"number-pad"}
          LeftComponent={
            <>
              <Icon iconName={"dollar"} width={8} tintColor={"white50"} />
              <Spacer width={"$6"} />
            </>
          }
        />
        <Spacer height={"$6"} />
        <BaseInputWithTheme
          color={"white"}
          placeholder={"Auto-Cancelation"}
          label={"Auto-Cancelation"}
          onPress={() => setIsChecked(!isChecked)}
          RightComponent={
            <BaseToggle
              onCheckedChange={() => setIsChecked(!isChecked)}
              checked={isChecked}
            />
          }
        />
      </View>
      <PrimaryButton onPress={handleSubmit}>{"Create Card"}</PrimaryButton>
    </View>
  );
};

export { NewCardScreen };
