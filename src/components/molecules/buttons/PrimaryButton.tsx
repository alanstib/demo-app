import { styled } from "tamagui";
import { BaseButton } from "./BaseButton";

const PrimaryButton = styled(BaseButton, {
  name: "PrimaryButton",
  backgroundColor: "$white",
  size: "$9",
  borderRadius: "$2",
  height: "$10",
});

export { PrimaryButton };
