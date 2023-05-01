import { useEffect } from "react";

export const useInitialEfect = (callback: () => void) => {
  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      callback();
    }
  }, []);
};
