const color = {
  primary: "#E40B89",
  primary70: "rgba(228, 11, 137, 0.7)",
  primary50: "rgba(228, 11, 137, 0.5)",
  primary15: "rgba(228, 11, 137, 0.15)",
  black: "#000000",
  black0: "rgba(0, 0, 0, 0)",
  black40: "rgba(0, 0, 0, .40)",
  white: "#FFFFFF",
  white90: "rgba(255, 255, 255, .90)",
  white70: "rgba(255, 255, 255, .70)",
  white50: "rgba(255, 255, 255, .50)",
  white30: "rgba(255, 255, 255, .30)",
  white15: "rgba(255, 255, 255, .15)",
  white10: "rgba(255, 255, 255, .10)",
  white5: "rgba(255, 255, 255, .05)",
  white0: "rgba(255, 255, 255, 0)",
  figmaBackground: "#444444",
  error: "#AD0000",
  lyftPink: "#FF00FF",
  hyperlink: "#0294FF",
  green: "#54C186",
  red: "#BE3E22",
};

type ColorName = keyof typeof color;

export { color };
export type { ColorName };
