import { useCallback, useEffect, useMemo, useState } from 'react';
import { getSpaceShips } from '../api/shipsApi';

const useSpaceShipsSearch = () => {
  const [state, setState] = useState({
    spaceShips: [],
  });
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);

  const urls = useMemo(() => {
    return [
      `https://swapi.dev/api/starships/`,
      `https://swapi.py4e.com/api/starships/`,
    ];
  }, []);

  const getSpace = useCallback(
    async (controller) => {
      setLoading(true);
      try {
        const { data } = await getSpaceShips(urls, controller.signal);
        setState((prev) => {
          return {
            spaceShips: [...prev.spaceShips, ...data],
          };
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError, setState, urls]
  );

  useEffect(() => {
    const controller = new AbortController();
    getSpace(controller);
    return () => controller.abort();
  }, [getSpace]);

  return {
    state,
    setState,
    loading,
    error,
  };
};

export default useSpaceShipsSearch;
