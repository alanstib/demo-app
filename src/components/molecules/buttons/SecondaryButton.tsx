import { styled } from "tamagui";
import { BaseButton } from "./BaseButton";

const SecondaryButton = styled(BaseButton, {
  name: "SecondaryButton",
  backgroundColor: "$white15",
  color: "$white",
  height: 42,
  paddingHorizontal: "$5",
  ellipsizeMode: undefined,
  borderRadius: "$2",
});

export { SecondaryButton };
