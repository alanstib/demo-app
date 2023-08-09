import { useRef } from "react";
import { Body1 } from "components/atoms";
import { Spacer, TamaguiElement } from "tamagui";
import { useAutoFocus } from "utils/hooks/react-native/useAutoFocus";
import { BaseInputWithTheme, BaseInputWithThemeProps } from "../BaseInputWithTheme";

type FormInputProps = BaseInputWithThemeProps & {
  labelText?: string;
  errorMessage?: string;
  autoFocusType?: "immediate" | "after-navigation";
};

const FormInput = ({ labelText, autoFocus, autoFocusType, ...props }: FormInputProps) => {
  const inputRef = useRef<TamaguiElement | null>(null);

  useAutoFocus(inputRef, { autoFocus, autoFocusType });

  return (
    <>
      {labelText ? (
        <>
          <Body1 color={"$white"} textTransform={"capitalize"}>
            {labelText}
          </Body1>
          <Spacer size={"$4"} />
        </>
      ) : null}
      <BaseInputWithTheme
        ref={inputRef}
        autoFocus={autoFocusType === "after-navigation" ? undefined : autoFocus}
        {...props}
      />
    </>
  );
};

export { FormInput };
export type { FormInputProps };
