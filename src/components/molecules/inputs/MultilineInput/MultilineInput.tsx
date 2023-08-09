import { TextArea, TextAreaProps, YStack } from "tamagui";
import { getColorValue } from "theme/utils";

type MultilineInputProps = Omit<
  TextAreaProps,
  "unstyled" | "color" | "flex" | "placeholderTextColor"
> & {
  errorMessage?: string;
};

const MultilineInput = (props: MultilineInputProps) => (
  <YStack
    borderRadius={"$2"}
    borderColor={props.errorMessage ? "$error" : undefined}
    padding={"$6"}
    alignItems={"center"}
    backgroundColor={"$white10"}
  >
    <TextArea
      {...props}
      unstyled={true}
      color={props.errorMessage ? "$error" : "$white50"}
      placeholderTextColor={getColorValue("white50")}
    />
  </YStack>
);

export { MultilineInput };
export type { MultilineInputProps };
