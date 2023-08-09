import { useEffect, RefObject } from "react";
import { useNavigation } from "@react-navigation/native";
import { TamaguiElement } from "tamagui";

type UseAutoFocusOptions = {
  autoFocus?: boolean;
  autoFocusType?: "immediate" | "after-navigation";
};

const useAutoFocus = (
  ref: RefObject<TamaguiElement | null>,
  { autoFocus, autoFocusType }: UseAutoFocusOptions,
) => {
  const navigation = useNavigation();

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    if (autoFocus && autoFocusType === "after-navigation") {
      timeout = setTimeout(() => {
        ref.current?.focus();
      }, 550);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [navigation, autoFocus, autoFocusType, ref]);
};

export { useAutoFocus };
