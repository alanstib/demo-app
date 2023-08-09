import { performLayoutAnimation } from "utils/animations";
import { useHasValueChanged } from "../general/useHasValueChanged";

const useLayoutAnimationOnChange = <ValueType>(
  value: ValueType,
  skipAnimation = false,
) => {
  const hasValueChanged = useHasValueChanged(value);

  if (hasValueChanged) {
    performLayoutAnimation(skipAnimation);
  }
};

export { useLayoutAnimationOnChange };
