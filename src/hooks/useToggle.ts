import { useState } from "react";

export const useToggle = (initialState: boolean) => {
  const [state, setter] = useState(initialState);

  const handler = () => {
    setter(!state);
  };

  const reset = () => {
    setter(initialState);
  };

  return [state, handler, reset] as const;
};
