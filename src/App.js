import { useState } from 'react';
import ListShips from './components/ListShips';
import Ship from './components/Ship';

function App() {
  const [selectedShip, setSelectedShip] = useState({
    data: undefined,
    image: undefined,
  });

  return (
    <div>
      <div>
        <button>HOME </button>
        <button onClick={() => setSelectedShip({})}>STARSHIPS</button>
      </div>

      {selectedShip.data ? (
        <Ship selectedShip={selectedShip} />
      ) : (
        <ListShips setSelectedShip={setSelectedShip} />
      )}
    </div>
  );
}

export default App;
