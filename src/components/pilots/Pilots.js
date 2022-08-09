import ButtonForm from '../buttons/ButtonForm';
import Pilot from './Pilot';

const Pilots = ({ urlPilotsArray, setPilots, setFilms, initialData }) => {
  const handlePilots = (urlPilotsArray) => {
    if (!urlPilotsArray.length) {
      setPilots((prev) => ({
        data: <span>No Pilots</span>,
        toggleShow: !prev.toggleShow,
      }));

      setFilms(initialData);
    } else {
      const pilotsRendereds = urlPilotsArray.map((el, index) => (
        <Pilot key={index} data={el} />
      ));

      setPilots((prev) => ({
        data: pilotsRendereds,
        toggleShow: !prev.toggleShow,
      }));

      setFilms(initialData);
    }
  };
  return (
    <>
      <ButtonForm onClick={() => handlePilots(urlPilotsArray)}>
        Show Pilots
      </ButtonForm>
    </>
  );
};

export default Pilots;
