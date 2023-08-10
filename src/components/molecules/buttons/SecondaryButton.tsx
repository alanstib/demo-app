import { styled } from "tamagui";
import { BaseButton } from "./BaseButton";

const SecondaryButton = styled(BaseButton, {
  name: "SecondaryButton",
  backgroundColor: "$white15",
  color: "$white",
  paddingVertical: "$5",
  paddingHorizontal: "$8",
  ellipsizeMode: undefined,
  borderRadius: "$2",
});

export { SecondaryButton };
