import { useHasValueChanged } from "./useHasValueChanged";

const useRunFunctionOnChange = <Value, Fn extends () => unknown>(
  value: Value,
  fn: Fn,
) => {
  const hasValueChanged = useHasValueChanged(value);

  if (hasValueChanged) {
    fn();
  }
};

export { useRunFunctionOnChange };
