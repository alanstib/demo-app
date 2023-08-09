import { styled, ThemeableStack, GetProps } from "tamagui";
import { useAutoHitSlop } from "utils/hooks";

type TouchableProps = Omit<GetProps<typeof BaseTouchable>, "hitSlop" | "onLayout">;

const BaseTouchable = styled(ThemeableStack, {
  hoverTheme: true,
  pressTheme: false,
  focusTheme: false,
  pressStyle: {
    opacity: 0.7,
  },
});

const Touchable = (props: TouchableProps) => {
  const [hitSlop, onLayout] = useAutoHitSlop();

  return <BaseTouchable {...props} hitSlop={hitSlop} onLayout={onLayout} />;
};

// Use BaseTouchable when you don't want to automatically apply hitSlop
// Else, use Touchable
export { Touchable, BaseTouchable };
export type { TouchableProps };
