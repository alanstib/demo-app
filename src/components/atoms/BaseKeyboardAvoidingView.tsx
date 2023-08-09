import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  StyleSheet,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

type BaseKeyboardAvoidingViewProps = Pick<KeyboardAvoidingViewProps, "children">;

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
});

const BaseKeyboardAvoidingView = ({ children }: BaseKeyboardAvoidingViewProps) => (
  <KeyboardAvoidingView
    behavior={"padding"}
    keyboardVerticalOffset={useHeaderHeight()}
    style={styles.keyboardAvoidingView}
  >
    {children}
  </KeyboardAvoidingView>
);

export { BaseKeyboardAvoidingView };
