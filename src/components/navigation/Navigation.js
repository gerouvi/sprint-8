import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = ({ selected }) => (
  <div className={styles.navigation}>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? `${styles.navigation__buttonWrapper} ${styles.navigation__buttonWrapper_active}`
          : ` ${styles.navigation__buttonWrapper}`
      }
    >
      <span className={styles.navigation__button}>Home</span>
    </NavLink>

    <NavLink
      to="/starships"
      className={({ isActive }) =>
        isActive && !selected
          ? `${styles.navigation__buttonWrapper} ${styles.navigation__buttonWrapper_active}`
          : ` ${styles.navigation__buttonWrapper}`
      }
    >
      <span className={styles.navigation__button}>StarShips</span>
    </NavLink>
  </div>
);
export default Navigation;
