import { Pressable, Keyboard, StyleSheet } from "react-native";
import { BottomSheetBackdropProps, BottomSheetBackdrop } from "@gorhom/bottom-sheet";

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
  },
});

const FixedBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop disappearsOnIndex={-1} appearsOnIndex={0} {...props}>
    <Pressable onPress={Keyboard.dismiss} style={styles.pressable} />
  </BottomSheetBackdrop>
);

export { FixedBackdrop };
