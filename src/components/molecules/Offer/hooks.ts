import { useWindowDimensions } from "tamagui";
import { getSpaceValue } from "theme/utils";

const useOfferDimensions = (): number => {
  const { width: windowWidth } = useWindowDimensions();
  // The offers are laid out like this:
  // $6 | offer card | $6 | offer card | $6
  // This offer card width = (window width - $6 - $6) / 2 - $6 / 2
  // This simplifies to card width = (window width - $9) / 2
  const offerDimensions = (windowWidth - getSpaceValue(9)) / 2;

  return offerDimensions;
};

export { useOfferDimensions };
