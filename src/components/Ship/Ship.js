import { useState } from 'react';
import styles from './Ship.module.css';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

const Ship = () => {
  const location = useLocation();

  const selectedShip = location.state;

  const [widthPicture, setWidthPicture] = useState(styles.img__default);
  return (
    <>
      <Header />
      <Navigation />
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
          <div className={styles.ship__bottom}>
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
        </div>
      </div>
    </>
  );
};

export default Ship;
