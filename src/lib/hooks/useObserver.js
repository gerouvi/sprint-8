import { useEffect, useRef } from 'react';

function useObserver(loading, state, setState) {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (loading) return;
      if (entries[0].isIntersecting && state.hasMore) {
        setState((prev) => ({ ...prev, page: prev.page + 1 }));
      }
    });
    const copyRef = { ...ref };
    observer.observe(copyRef.current);
    return () => {
      observer.unobserve(copyRef.current);
    };
  }, [state, loading, setState]);
  return ref;
}

export default useObserver;
