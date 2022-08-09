import { useEffect, useRef } from 'react';

function useObserver(callback) {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback()
      }
    });
    const copyRef = { ...ref };
    observer.observe(copyRef.current);
    return () => {
      observer.unobserve(copyRef.current);
    };
  }, [callback]);
  return ref;
}

export default useObserver;
