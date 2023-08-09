import { YStack, YStackProps } from "tamagui";

type SolidDividerProps = Pick<YStackProps, "backgroundColor">;

const SolidDivider = ({ backgroundColor = "$white15" }: SolidDividerProps) => (
  <YStack height={1} backgroundColor={backgroundColor} width={"$full"} />
);

export { SolidDivider };
