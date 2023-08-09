import { useCallback, useState } from "react";

const useBooleanState = (initialBoolean = false) => {
  const [state, setState] = useState(initialBoolean);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);

  const setFalse = useCallback(() => {
    setState(false);
  }, []);

  const toggleState = useCallback(() => {
    setState((oldState) => !oldState);
  }, []);

  return { state, setTrue, setFalse, toggleState, setState };
};

export { useBooleanState };
