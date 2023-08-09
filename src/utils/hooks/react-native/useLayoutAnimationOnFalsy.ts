import { performLayoutAnimation } from "utils/animations";
import { useHasValueBecomeFalsy } from "../general/useHasValueBecomeFalsy";

const useLayoutAnimationOnFalsy = <ValueType>(
  value: ValueType,
  skipAnimation = false,
) => {
  const valueJustBecameFalsy = useHasValueBecomeFalsy(value);

  if (valueJustBecameFalsy) {
    performLayoutAnimation(skipAnimation);
  }
};

export { useLayoutAnimationOnFalsy };
