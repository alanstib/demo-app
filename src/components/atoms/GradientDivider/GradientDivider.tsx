import { LinearGradient } from "@tamagui/linear-gradient";
import { GetProps } from "tamagui";

type LinearGradientProps = GetProps<typeof LinearGradient>;

type GradientDividerProps = {
  variant: "light" | "dark";
};

const STATIC_PROPS: Pick<LinearGradientProps, "colors" | "start" | "end"> = {
  start: [0, 0],
  end: [1, 1],
};

const COLORS_BY_VARIANT: Record<
  GradientDividerProps["variant"],
  LinearGradientProps["colors"]
> = {
  light: ["$white0", "white", "$white0"],
  dark: ["$white0", "$white15", "$white0"],
};

const GradientDivider = ({ variant }: GradientDividerProps) => (
  <LinearGradient {...STATIC_PROPS} colors={COLORS_BY_VARIANT[variant]} height={"$1"} />
);

export { GradientDivider };
