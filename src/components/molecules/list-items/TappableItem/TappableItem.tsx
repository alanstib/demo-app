import { Icon } from "components/atoms";
import { ItemContainer, ItemContainerProps } from "../ItemContainer";

type TappableItemProps = Pick<ItemContainerProps, "onPress"> & {
  LeftComponent: ItemContainerProps["children"];
  isChevronDisplayed?: boolean;
  disabled?: boolean;
};

const TappableItem = ({
  onPress,
  LeftComponent,
  isChevronDisplayed = true,
  disabled,
}: TappableItemProps) => (
  <ItemContainer disabled={disabled} onPress={onPress}>
    {LeftComponent}
    {isChevronDisplayed ? (
      <Icon
        tintColor={"white50"}
        iconName={"chevron-down"}
        width={15}
        rotate={"270deg"}
      />
    ) : null}
  </ItemContainer>
);

export { TappableItem };
export type { TappableItemProps };
