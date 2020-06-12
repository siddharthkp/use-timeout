import { useEffect, useRef } from "react";

function useTimeout(callback, delay) {
  const savedCallback = useRef();

  // add a comment
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
}

export default useTimeout;
