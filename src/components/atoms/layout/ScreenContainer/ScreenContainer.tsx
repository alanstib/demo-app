import { YStack, YStackProps } from "tamagui";

type ScreenContainerProps = Pick<YStackProps, "children" | "backgroundColor">;

const ScreenContainer = ({
  children,
  backgroundColor = "$black",
}: ScreenContainerProps) => (
  <YStack backgroundColor={backgroundColor} flex={1}>
    {children}
  </YStack>
);

export { ScreenContainer };
