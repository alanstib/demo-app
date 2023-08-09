import { styled } from "tamagui";
import { BaseButton } from "./BaseButton";

const TertiaryButton = styled(BaseButton, {
  name: "TertiaryButton",
  backgroundColor: "$white15",
  color: "$white",
  height: "$10",
  borderColor: "$white50",
  borderWidth: 1,
  paddingHorizontal: "$5",
  ellipsizeMode: undefined,
  borderRadius: "$2",
});

export { TertiaryButton };
