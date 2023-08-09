import React, { useMemo } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { Spacer } from "tamagui";
import { typedValues } from "utils";
import {
  ControlledFormInput,
  ControlledFormInputProps,
  ControlledFormMultilineInput,
  ControlledFormMultilineInputProps,
} from "components/molecules/inputs";

type ValidInputValue = string | boolean | number;
type RequiredSchema = Record<string, ValidInputValue>;

type InputConfiguration<Schema, Name extends keyof Schema> = (
  | ControlledFormInputProps
  | ControlledFormMultilineInputProps
) & {
  name: Name;
  component: "ControlledFormInput" | "ControlledFormMultilineInput";
};

type StandardFieldConfigurations<Schema extends RequiredSchema> = {
  [SpecificKey in keyof Schema]: InputConfiguration<Schema, SpecificKey>;
};

type FormProps<
  Schema extends RequiredSchema,
  FieldConfigurations = StandardFieldConfigurations<Schema>,
> = {
  fieldConfigurations: FieldConfigurations;
  methods: UseFormReturn<Schema>;
  submitButtonText?: string;
};

const Form = <
  Schema extends RequiredSchema,
  FieldConfigurations extends StandardFieldConfigurations<Schema>,
>({
  fieldConfigurations,
  methods,
}: FormProps<Schema, FieldConfigurations>) => {
  const inputPropsFromRecord = useMemo(
    () => typedValues(fieldConfigurations),
    [fieldConfigurations],
  );

  return (
    <FormProvider {...methods}>
      {inputPropsFromRecord.map(
        ({ component, onFocus, onBlur, ...inputProps }, index, originalArray) => {
          const ComponentToUse =
            component === "ControlledFormInput"
              ? ControlledFormInput
              : ControlledFormMultilineInput;

          return (
            <React.Fragment key={inputProps.name}>
              <ComponentToUse {...inputProps} />
              {index !== originalArray.length - 1 ? <Spacer size={"$6"} /> : null}
            </React.Fragment>
          );
        },
      )}
    </FormProvider>
  );
};

export { Form };
export type { FormProps };
