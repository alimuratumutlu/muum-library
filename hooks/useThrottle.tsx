import { useEffect, useRef, useState } from 'react';

const useThrottle = (value: any, limit: number) => {
  const [state, setState] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(
      function () {
        if (Date.now() - lastRan.current >= limit) {
          setState(value);
          lastRan.current = Date.now();
        }
      },
      limit - (Date.now() - lastRan.current),
    );

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return state;
};

export default useThrottle;
