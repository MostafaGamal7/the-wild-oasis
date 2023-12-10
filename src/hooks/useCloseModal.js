import { useCallback, useEffect } from "react";

export function useCloseModal(ref, handler) {
  const handleClick = useCallback(
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    },
    [ref, handler]
  );
  useEffect(
    function () {
      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick, true);
    },
    [ref, handleClick]
  );
}
