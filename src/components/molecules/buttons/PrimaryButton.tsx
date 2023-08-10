import { styled } from "tamagui";
import { BaseButton } from "./BaseButton";

const PrimaryButton = styled(BaseButton, {
  name: "PrimaryButton",
  backgroundColor: "$white",
  size: "$7",
  borderRadius: "$2",
  height: "$10",
  justifyContent: "center",
  alignItems: "center",
});

export { PrimaryButton };
