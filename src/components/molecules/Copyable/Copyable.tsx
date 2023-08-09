import { ReactNode } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Icon, Touchable } from "components/atoms";
import { Spacer } from "tamagui";
import { getSpaceValue } from "theme/utils";
import * as Clipboard from "expo-clipboard";

type CopyableProps = {
  children: ReactNode;
  textToCopy: string;
  style?: StyleProp<ViewStyle>;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
  },
});

const Copyable = ({ children, textToCopy, style }: CopyableProps) => (
  <Touchable
    style={[styles.container, style]}
    onPress={() => Clipboard.setStringAsync(textToCopy)}
  >
    {children}
    <Spacer size={"$3"} />
    <Icon iconName={"clipboard"} tintColor={"figmaBackground"} width={getSpaceValue(5)} />
  </Touchable>
);

export { Copyable };
