import useObserver from '../lib/hooks/useObserver';
import useSpaceShipsSearch from '../lib/hooks/useSpaceShipsSearch';

const ListShips = ({ setSelectedShip }) => {
  const { state, setState, loading, error } = useSpaceShipsSearch();
  const observerRef = useObserver(loading, state, setState);

  return (
    <>
      {state.spaceShips.map((el, index) => (
        <div key={index}>
          <button
            onClick={() =>
              setSelectedShip({
                data: el,
                image: index,
              })
            }
          >
            <p>{el.name}</p>
            <p>{el.model}</p>
          </button>
        </div>
      ))}{' '}
      <div style={{ height: 1 }} ref={observerRef}></div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
    </>
  );
};

export default ListShips;
