import useSpaceShipsSearch from '../../lib/hooks/useSpaceShipsSearch';
import styles from './ListShips.module.css';
import Spinner from '../share/Spinner';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ListShips = () => {
  const { ref, state, loading, error } = useSpaceShipsSearch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('userStarWarsLogged')) navigate('/login');
  }, [navigate]);

  return (
    <div className={styles.listShips}>
      {state.spaceShips.map((el, index) => (
        <Link
          to={`/starships/${index}`}
          state={{ data: el, image: index }}
          key={index}
          className={styles.listShips__link}
        >
          <div className={styles.listShips__row}>
            <p className={styles.listShips__name}>{el.name}</p>
            <p className={styles.listShips__model}>{el.model}</p>
          </div>
        </Link>
      ))}
      <div style={{ height: 1 }} ref={ref}></div>
      {loading && <Spinner />}
      {error && <h1 style={{ textAlign: 'center' }}>Error al cargar</h1>}
    </div>
  );
};

export default ListShips;
