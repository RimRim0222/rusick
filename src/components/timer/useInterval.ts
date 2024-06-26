import { useEffect, useLayoutEffect, useRef } from 'react';

export default function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay) {
      return;
    }
    const id = setInterval(() => savedCallback.current(), delay);
    return () => {
      clearInterval(id);
    };
  }, [delay]);
}
