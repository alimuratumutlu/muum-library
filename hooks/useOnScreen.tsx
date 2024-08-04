import { useEffect, useState } from 'react';

const useOnScreen = (ref: any, rootMargin = '0px') => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), { rootMargin });
      observer.observe(node);
      return () => {
        observer.unobserve(node);
      };
    }
  }, []);

  return isIntersecting;
};

export default useOnScreen;
