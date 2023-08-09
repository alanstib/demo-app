import { useMemo } from "react";
import { useKeyboard } from "@react-native-community/hooks";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const useKeyboardOffsetHeight = (additionalSpacing: number) => {
  const { bottom } = useSafeAreaInsets();
  const { coordinates } = useKeyboard();

  const startY = coordinates.start?.screenY;
  const endY = coordinates.end.screenY;

  // useKeyboard hook has keyboardShown, keyboardHeight
  // but, I've found that there's some latency in terms of when the keyboard displays and when they actually change
  const calculatedKeyboardHeight = startY !== undefined ? startY - endY : 0;

  const keyboardOffsetHeight = useMemo(() => {
    if (!calculatedKeyboardHeight || calculatedKeyboardHeight < 0) {
      return bottom === 0 ? additionalSpacing : bottom;
    }

    return calculatedKeyboardHeight + additionalSpacing;
  }, [bottom, calculatedKeyboardHeight, additionalSpacing]);

  return keyboardOffsetHeight;
};

export { useKeyboardOffsetHeight };
