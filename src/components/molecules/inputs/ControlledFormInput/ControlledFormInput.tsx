import { useCallback } from "react";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { useController, UseControllerProps } from "react-hook-form";
import { FormInput, FormInputProps } from "../FormInput";
import { getMaskedPhoneValue } from "./utils";

type ControlledFormInputProps = UseControllerProps &
  Omit<FormInputProps, "onChangeText" | "value">;

const ControlledFormInput = ({
  name,
  rules,
  defaultValue,
  secureTextEntry: secureTextEntryProp,
  onBlur,
  ...formInputProps
}: ControlledFormInputProps) => {
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
      if (name === "phone") {
        const maskedValue = getMaskedPhoneValue(text);

        onChange(maskedValue);
      } else {
        onChange(text);
      }
    },
    [name, onChange],
  );

  return (
    <FormInput
      {...formInputProps}
      defaultValue={defaultValue}
      onChangeText={handleOnChangeText}
      onBlur={handleOnBlur}
      value={value}
      errorMessage={errorObject?.message}
    />
  );
};

export { ControlledFormInput };
export type { ControlledFormInputProps };
