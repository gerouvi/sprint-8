import useSpaceShipsSearch from './lib/hooks/useSpaceShipsSearch';

function App() {
  const { state, loading } = useSpaceShipsSearch();

  let listShips;

  if (state.spaceShips) {
    listShips = state.spaceShips.map((el) => {
      return (
        <div key={el.name + Math.random()}>
          <button>
            <p>{el.name}</p>
            <p>{el.model}</p>
          </button>
        </div>
      );
    });
  }
  return (
    <div>
      <div>
        <button>HOME </button>
        <button>STARSHIPS</button>
      </div>
      {loading && <h1>Loading...</h1>}
      {listShips}
    </div>
  );
}

export default App;
