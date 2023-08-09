import { performLayoutAnimation } from "utils/animations";
import { useHasValueBecomeTruthy } from "../general/useHasValueBecomeTruthy";

const useLayoutAnimationOnTruthy = <ValueType>(
  value: ValueType,
  skipAnimation = false,
) => {
  const valueJustBecameTruthy = useHasValueBecomeTruthy(value);

  if (valueJustBecameTruthy) {
    performLayoutAnimation(skipAnimation);
  }
};

export { useLayoutAnimationOnTruthy };
