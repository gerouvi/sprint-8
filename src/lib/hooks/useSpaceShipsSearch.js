import { useCallback, useEffect, useMemo, useState } from 'react';
import { getSpaceShips } from '../api/shipsApi';
import useObserver from '../../lib/hooks/useObserver';

const useSpaceShipsSearch = () => {
  const [state, setState] = useState({
    spaceShips: [],
    hasMore: undefined,
    page: 1,
  });
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);

  const nextPage = useCallback(() => {
    if (loading) return;
    if (state.hasMore) {
      setState((prev) => ({ ...prev, page: prev.page + 1 }));
    }
  }, [state, loading]);
  
  const observerRef = useObserver(nextPage);

  const urls = useMemo(() => {
    return [
      `https://swapi.dev/api/starships/?page=${state.page}`,
      `https://swapi.py4e.com/api/starships/?page=${state.page}`,
    ];
  }, [state.page]);

  const getSpace = useCallback(
    async (controller) => {
      setLoading(true);
      try {
        const { data, hasMore } = await getSpaceShips(urls, controller.signal);
        setState((prev) => {
          return {
            spaceShips: [...prev.spaceShips, ...data],
            hasMore,
            page: state.page,
          };
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError, setState, urls, state.page]
  );

  useEffect(() => {
    const controller = new AbortController();
    getSpace(controller);
    return () => controller.abort();
  }, [getSpace]);

  return {
    ref: observerRef,
    state,
    setState,
    loading,
    error,
  };
};

export default useSpaceShipsSearch;
