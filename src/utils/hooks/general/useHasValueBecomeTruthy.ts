import { usePrevious } from "./usePrevious";

const useHasValueBecomeTruthy = <ValueType>(value: ValueType) => {
  const prevValue = usePrevious(value);

  return !prevValue && !!value;
};

export { useHasValueBecomeTruthy };
