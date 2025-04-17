import { useState } from "react";

export const useObjectState = <T extends Record<string, unknown>>(
  initial: T
) => {
  const [state, setState] = useState<T>(initial);

  const setField = <K extends keyof T>(key: K, value: T[K]) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const resetField = () => {
    setState(initial);
  };

  return [state, setField, resetField] as const;
};
