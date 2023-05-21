import { useCallback, useMemo, useState } from "react";
interface UseHoverBind {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverBind];
export const useHover = () => {
  const [ishover, setIsHover] = useState(false);
  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);
  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);
  return useMemo<UseHoverResult>(
    () => [
      ishover,
      {
        onMouseLeave,
        onMouseEnter,
      },
    ],
    [ishover, onMouseLeave, onMouseEnter]
  );
};
