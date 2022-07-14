const Ship = ({ selectedShip }) => {
  return (
    <div>
      <img
        src={`https://starwars-visualguide.com/assets/img/starships/${selectedShip.image}.jpg`}
        alt="error"
        onError={(e) =>
          (e.target.src =
            'https://starwars-visualguide.com/assets/img/placeholder.jpg')
        }
      />

      <div> {selectedShip.data.name}</div>
      <div> Model: {selectedShip.data.model}</div>
      <div>Manufacurer: {selectedShip.data.manufacturer}</div>
      <div>Cost in credits: {selectedShip.data.cost_in_credits}</div>
      <div>Length: {selectedShip.data.length}</div>
      <div>Atmosphere speed: {selectedShip.data.max_atmosphering_speed}</div>
      <div>Crew: {selectedShip.data.crew}</div>
    </div>
  );
};

export default Ship;
