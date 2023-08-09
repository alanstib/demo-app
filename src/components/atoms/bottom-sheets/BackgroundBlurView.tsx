import { useMemo } from "react";
import { BottomSheetBackgroundProps } from "@gorhom/bottom-sheet";
import { BlurView } from "@react-native-community/blur";
import { getSpaceValue } from "theme/utils";

const BackgroundBlurView = ({ style: styleProp }: BottomSheetBackgroundProps) => {
  const style = useMemo(
    () => [styleProp, { borderRadius: getSpaceValue(2) }],
    [styleProp],
  );

  return <BlurView style={style} blurType={"dark"} blurAmount={10} />;
};

export { BackgroundBlurView };
