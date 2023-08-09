import { useCallback } from "react";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { TextAreaProps } from "tamagui";
import { UseControllerProps, useController } from "react-hook-form";
import { FormMultilineInput } from "../FormMultiLineInput";

type ControlledFormMultilineInputProps = UseControllerProps &
  Omit<
    TextAreaProps,
    "unstyled" | "color" | "flex" | "placeholderTextColor" | "onChange" | "value"
  >;

const ControlledFormMultilineInput = ({
  name,
  rules,
  defaultValue,
  onBlur,
  ...textAreaProps
}: ControlledFormMultilineInputProps) => {
  const {
    field: { onChange, onBlur: controlledOnBlur, value },
    fieldState: { error: errorObject },
  } = useController({ name, rules, defaultValue });

  const handleOnBlur = useCallback(
    (args: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (onBlur) {
        onBlur(args);
      }

      controlledOnBlur();
    },
    [controlledOnBlur, onBlur],
  );

  const handleOnChangeText = useCallback(
    (text: string) => {
      onChange(text);
    },
    [onChange],
  );

  return (
    <FormMultilineInput
      {...textAreaProps}
      onChange={onChange}
      onBlur={handleOnBlur}
      onChangeText={handleOnChangeText}
      value={value}
      errorMessage={errorObject?.message}
    />
  );
};

export { ControlledFormMultilineInput };
export type { ControlledFormMultilineInputProps };
