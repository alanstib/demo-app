import { useRef } from "react";

const usePrevious = <ValueType>(value: ValueType) => {
  const ref = useRef(value);

  const previousValue = ref.current;

  ref.current = value;

  return previousValue;
};

export { usePrevious };
