import { styled } from "tamagui";
import { BaseButton } from "./BaseButton";

const TextButton = styled(BaseButton, {
  name: "TextButton",
  color: "$white50",
  backgroundColor: "$backgroundTransparent",
  size: "$9",
});

export { TextButton };
