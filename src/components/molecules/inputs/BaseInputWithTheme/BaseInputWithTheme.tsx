import { ForwardedRef, forwardRef, ReactNode, useCallback } from "react";
import { GestureResponderEvent, Text } from "react-native";
import { InputProps, TamaguiElement, XStack } from "tamagui";
import { BaseInput, BaseInputProps } from "../BaseInput";

type BaseInputWithThemeProps = BaseInputProps & {
  LeftComponent?: ReactNode;
  RightComponent?: ReactNode;
  errorMessage?: string;
  label?: string;
  borderWidth?: InputProps["borderWidth"];
};

const BaseInputWithTheme = forwardRef(
  (
    {
      LeftComponent,
      errorMessage,
      defaultValue,
      RightComponent,
      borderWidth = 1,
      onPress,
      label,
      ...props
    }: BaseInputWithThemeProps,
    ref: ForwardedRef<TamaguiElement | null>,
  ) => {
    const handleOnPress = useCallback(
      (e: GestureResponderEvent) => {
        if (onPress) {
          onPress(e);
        } else {
          // @ts-ignore
          ref?.current.focus();
        }
      },
      [onPress, ref],
    );

    return (
      <>
        {label && <Text style={{ color: "white", paddingBottom: 12 }}>{label}</Text>}
        <XStack
          pointerEvents={onPress ? "box-only" : undefined}
          onPress={handleOnPress}
          borderRadius={"$2"}
          borderColor={errorMessage ? "$error" : undefined}
          borderWidth={borderWidth}
          padding={"$6"}
          alignItems={"center"}
          backgroundColor={"$white10"}
        >
          {LeftComponent}
          <BaseInput
            {...props}
            ref={ref}
            editable={!onPress}
            color={errorMessage ? "$error" : "$white"}
            flex={1}
          />
          {RightComponent}
        </XStack>
      </>
    );
  },
);

export { BaseInputWithTheme };
export type { BaseInputWithThemeProps };
