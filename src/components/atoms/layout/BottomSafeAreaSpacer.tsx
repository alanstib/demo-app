import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Spacer } from "tamagui";

const BottomSafeAreaSpacer = () => {
  const { bottom: bottomSafeArea } = useSafeAreaInsets();

  return <Spacer height={bottomSafeArea} />;
};

export { BottomSafeAreaSpacer };
