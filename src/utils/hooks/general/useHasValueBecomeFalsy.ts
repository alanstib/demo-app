import { usePrevious } from "./usePrevious";

const useHasValueBecomeFalsy = <ValueType>(value: ValueType) => {
  const prevValue = usePrevious(value);

  return !!prevValue && !value;
};

export { useHasValueBecomeFalsy };
