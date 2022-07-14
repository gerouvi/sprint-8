import useSpaceShipsSearch from '../lib/hooks/useSpaceShipsSearch';

const ListShips = ({ setSelectedShip }) => {
  const { state, loading, error } = useSpaceShipsSearch();

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
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
    </>
  );
};

export default ListShips;
