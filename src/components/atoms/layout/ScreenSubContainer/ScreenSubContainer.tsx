import { YStack, YStackProps } from "tamagui";

type ScreenSubContainerProps = Omit<YStackProps, "paddingHorizontal">;

const ScreenSubContainer = ({ children, ...props }: ScreenSubContainerProps) => (
  <YStack {...props} paddingHorizontal={"$6"}>
    {children}
  </YStack>
);

export { ScreenSubContainer };
