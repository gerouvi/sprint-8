import { useState } from 'react';
import Header from '../Header/Header';
import ListShips from '../ListShips/ListShips';
import Navigation from '../Navigation/Navigation';
import Ship from '../Ship/Ship';

const StarShips = () => {
  const [selectedShip, setSelectedShip] = useState({
    data: undefined,
    image: undefined,
  });

  return (
    <div>
      <Header />
      <Navigation
        selectedShip={selectedShip}
        setSelectedShip={setSelectedShip}
      />
      {selectedShip.data ? (
        <Ship selectedShip={selectedShip} />
      ) : (
        <ListShips setSelectedShip={setSelectedShip} />
      )}
    </div>
  );
};

export default StarShips;
