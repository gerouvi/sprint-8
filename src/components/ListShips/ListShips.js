import useObserver from '../../lib/hooks/useObserver';
import useSpaceShipsSearch from '../../lib/hooks/useSpaceShipsSearch';
import styles from './ListShips.module.css';
import Spinner from '../Spinner/Spinner';

const ListShips = ({ setSelectedShip }) => {
  const { ref, state, loading, error } = useSpaceShipsSearch();


  return (
    <div className={styles.listShips}>
      {state.spaceShips.map((el, index) => (
        <div
          key={index}
          className={styles.listShips__row}
          onClick={() =>
            setSelectedShip({
              data: el,
              image: index,
            })
          }
        >
          <p className={styles.listShips__name}>{el.name}</p>
          <p className={styles.listShips__model}>{el.model}</p>
        </div>
      ))}
      <div style={{ height: 1 }} ref={ref}></div>
      {loading && <Spinner />}
      {error && <h1 style={{ textAlign: 'center' }}>Error al cargar</h1>}
    </div>
  );
};

export default ListShips;
