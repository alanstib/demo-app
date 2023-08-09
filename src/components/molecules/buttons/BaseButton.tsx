import { styled, Button } from "tamagui";

const BaseButton = styled(Button, {
  unstyled: true,
  name: "BaseButton",
  color: "$black",
  fontWeight: "500",
  fontSize: "$3",
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        pressStyle: {
          opacity: 1,
        },
      },
    },
  } as const,
  pressStyle: {
    opacity: 0.7,
  },
});

export { BaseButton };
