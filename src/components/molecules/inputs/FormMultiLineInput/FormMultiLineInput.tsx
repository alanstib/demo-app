import { useRef } from "react";
import { TextArea, YStack } from "tamagui";
import { getColorValue } from "theme/utils";
import { Body1 } from "components/atoms";
import { Spacer, TamaguiElement } from "tamagui";
import { useAutoFocus } from "utils/hooks/react-native/useAutoFocus";
import { FormInputProps } from "../FormInput";

type FormMultilineInputProps = FormInputProps;

const FormMultilineInput = ({
  labelText,
  errorMessage,
  autoFocus,
  autoFocusType,
  ...props
}: FormMultilineInputProps) => {
  const inputRef = useRef<TamaguiElement | null>(null);

  useAutoFocus(inputRef, { autoFocus, autoFocusType });

  return (
    <>
      {labelText ? (
        <>
          <Body1 paddingBottom={"$2"} alignSelf={"flex-start"} color={"$white"}>
            {labelText}
          </Body1>
          <Spacer size={"$4"} />
        </>
      ) : null}
      <YStack
        borderRadius={"$2"}
        borderColor={errorMessage ? "$error" : undefined}
        padding={"$6"}
        alignItems={"flex-start"}
        backgroundColor={"$white10"}
        width={"$full"}
      >
        <TextArea
          ref={inputRef}
          autoFocus={autoFocusType === "after-navigation" ? undefined : autoFocus}
          {...props}
          fontSize={"$4"}
          unstyled={true}
          color={"$white"}
          placeholderTextColor={getColorValue("white50")}
        />
        {errorMessage ? <Body1 color={"$error"}>{errorMessage}</Body1> : null}
      </YStack>
    </>
  );
};

export { FormMultilineInput };
export type { FormMultilineInputProps };
