import { useEffect, useRef } from 'react';

const useTimeout = (callback: any, delay: number) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const timer = setTimeout(() => callbackRef.current(), delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);
};

export default useTimeout;
