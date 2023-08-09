import { Text, View } from "react-native";

type SampleComponentProps = {
  text: string;
};

const SampleComponent = ({ text }: SampleComponentProps) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text>{`"SampleComponent" with text prop of: "${text}"`}</Text>
  </View>
);

export { SampleComponent };
