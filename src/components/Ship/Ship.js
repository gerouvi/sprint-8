import { useState } from 'react';
import styles from './Ship.module.css';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Pilot from '../Pilot/Pilot';
import ButtonForm from '../ButtonForm/ButtonForm';
import Film from '../Film/Film';

const Ship = () => {
  const location = useLocation();

  const selectedShip = location.state;

  const [widthPicture, setWidthPicture] = useState(styles.img__default);

  const [pilots, setPilots] = useState({
    data: null,
    toggleShow: false,
  });

  const handlePilots = (pilotsArray) => {
    if (!pilotsArray.length) {
      setPilots((prev) => ({
        data: <span>No Pilots</span>,
        toggleShow: !prev.toggleShow,
      }));
    } else {
      const renderPilots = pilotsArray.map((el, index) => (
        <Pilot key={index} data={el} />
      ));
      setPilots((prev) => ({
        data: renderPilots,
        toggleShow: !prev.toggleShow,
      }));
      setFilms((prev) => ({
        data: prev.data,
        toggleShow: false,
      }));
    }
  };

  const [films, setFilms] = useState({
    data: null,
    toggleShow: false,
  });

  const handleFilms = (filmsArray) => {
    if (!filmsArray.length) {
      setFilms((prev) => ({
        data: <span>No Films</span>,
        toggleShow: !prev.toggleShow,
      }));
    } else {
      const renderFilms = filmsArray.map((el, index) => (
        <Film key={index} data={el} />
      ));

      setFilms((prev) => ({
        data: renderFilms,
        toggleShow: !prev.toggleShow,
      }));

      setPilots((prev) => ({
        data: prev.data,
        toggleShow: false,
      }));
    }
  };
  return (
    <>
      <Header />
      <Navigation selected />
      <div className={styles.ship}>
        <div className={styles.ship__img}>
          <img
            className={widthPicture}
            src={`https://starwars-visualguide.com/assets/img/starships/${selectedShip.image}.jpg`}
            alt="error"
            onError={(e) => {
              e.target.src =
                'https://starwars-visualguide.com/assets/img/placeholder.jpg';
              setWidthPicture(styles.img__small);
            }}
          />
        </div>

        <div className={styles.ship__data}>
          <h1 className={styles.ship__title}> {selectedShip.data.name}</h1>
          <p className={styles.ship__description}>
            {selectedShip.data.starship_class}
          </p>
          <div className={styles.ship__details}>
            <ul className={styles.ship__dataColumn}>
              <li className={styles.ship__element}>
                {' '}
                Model: {selectedShip.data.model}
              </li>
              <li className={styles.ship__element}>
                Manufacurer: {selectedShip.data.manufacturer}
              </li>
              <li className={styles.ship__element}>
                Cost in credits: {selectedShip.data.cost_in_credits}
              </li>
            </ul>
            <ul className={styles.ship__dataColumn}>
              <li className={styles.ship__element}>
                Length: {selectedShip.data.length}
              </li>
              <li className={styles.ship__element}>
                Atmosphere speed: {selectedShip.data.max_atmosphering_speed}
              </li>
              <li className={styles.ship__element}>
                Crew: {selectedShip.data.crew}
              </li>
            </ul>
          </div>
          <div className={styles.ship__buttons}>
            <ButtonForm onClick={() => handlePilots(selectedShip.data.pilots)}>
              Show Pilots
            </ButtonForm>
            <ButtonForm onClick={() => handleFilms(selectedShip.data.films)}>
              Show Films
            </ButtonForm>
          </div>
          {pilots.toggleShow && (
            <>
              <div className={styles.ship__cardsTitle}>Pilots: </div>
              <div className={styles.ship__cards}>{pilots.data}</div>
            </>
          )}
          {films.toggleShow && (
            <>
              <div className={styles.ship__cardsTitle}>Films: </div>
              <div className={styles.ship__cards}>{films.data}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Ship;
