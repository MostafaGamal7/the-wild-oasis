import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handClick, listenCapturing);
      return () =>
        document.removeEventListener("click", handClick, listenCapturing);
    },
    [handler, listenCapturing]
  );
  return ref;
}
