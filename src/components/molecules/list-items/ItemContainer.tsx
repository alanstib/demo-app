import { Touchable } from "components/atoms";
import { GetProps } from "tamagui";

type ItemContainerProps = Omit<
  GetProps<typeof Touchable>,
  | "flexDirection"
  | "borderRadius"
  | "padding"
  | "alignItems"
  | "backgroundColor"
  | "width"
  | "justifyContent"
> & {
  borderRadiusType?: "all" | "top" | "bottom";
};

const ItemContainer = ({
  children,
  borderRadiusType = "all",
  ...props
}: ItemContainerProps) => (
  <Touchable
    flexDirection={"row"}
    borderTopLeftRadius={
      borderRadiusType === "all" || borderRadiusType === "top" ? "$2" : undefined
    }
    borderTopRightRadius={
      borderRadiusType === "all" || borderRadiusType === "top" ? "$2" : undefined
    }
    borderBottomLeftRadius={
      borderRadiusType === "all" || borderRadiusType === "bottom" ? "$2" : undefined
    }
    borderBottomRightRadius={
      borderRadiusType === "all" || borderRadiusType === "bottom" ? "$2" : undefined
    }
    padding={"$6"}
    alignItems={"center"}
    backgroundColor={"$white10"}
    width={"$full"}
    justifyContent={"space-between"}
    {...props}
  >
    {children}
  </Touchable>
);

export { ItemContainer };
export type { ItemContainerProps };
