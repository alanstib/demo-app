import { ForwardedRef, forwardRef, useCallback } from "react";
import { TextInputProps } from "react-native";
import { useBottomSheetInternal } from "@gorhom/bottom-sheet";
import { Input, InputProps, TamaguiElement } from "tamagui";
import { getColorValue } from "theme/utils";

type BaseInputProps = Omit<
  InputProps,
  "unstyled" | "placeholderTextColor" | "fontFamily"
>;

const BaseInput = forwardRef(
  (
    { color = "$white", onFocus, onBlur, ...props }: BaseInputProps,
    ref: ForwardedRef<TamaguiElement | null>,
  ) => {
    const shouldHandleKeyboardEvents =
      useBottomSheetInternal(true)?.shouldHandleKeyboardEvents;

    const handleFocus = useCallback(
      (args: Parameters<NonNullable<TextInputProps["onFocus"]>>[0]) => {
        if (shouldHandleKeyboardEvents) {
          shouldHandleKeyboardEvents.value = true;
        }

        onFocus?.(args);
      },
      [onFocus, shouldHandleKeyboardEvents],
    );

    const handleBlur = useCallback(
      (args: Parameters<NonNullable<TextInputProps["onFocus"]>>[0]) => {
        if (shouldHandleKeyboardEvents) {
          shouldHandleKeyboardEvents.value = true;
        }

        onBlur?.(args);
      },
      [onBlur, shouldHandleKeyboardEvents],
    );

    return (
      <Input
        {...props}
        ref={ref}
        color={color}
        onFocus={handleFocus}
        onBlur={handleBlur}
        fontFamily={"$body"}
        unstyled={true}
        placeholderTextColor={getColorValue("white50")}
      />
    );
  },
);

export { BaseInput };
export type { BaseInputProps };
