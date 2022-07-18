import Button from '../Button/Button';
import styles from './Navigation.module.css';

const Navigation = ({ selectedShip, setSelectedShip }) => {
  const buttonSelectedShipActive = selectedShip.data ? false : true;

  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__button}>
        <Button>Home</Button>
      </div>
      <div
        className={`${styles.navigation__button} ${
          buttonSelectedShipActive ? styles.navigation__button_active : ''
        }`}
      >
        <Button
          active={buttonSelectedShipActive}
          onClick={() =>
            setSelectedShip({
              data: undefined,
              image: undefined,
            })
          }
        >
          StarShips
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
