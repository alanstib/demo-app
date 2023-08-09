import { usePrevious } from "./usePrevious";

const useHasValueChanged = <ValueType>(value: ValueType) => {
  const prevValue = usePrevious(value);

  return prevValue !== value;
};

export { useHasValueChanged };
