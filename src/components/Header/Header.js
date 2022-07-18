import styles from './Header.module.css';
import sw from '../../assets/images/starwars.png';
import { useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const mainMenuShow = showMenu ? '' : styles.mainMenuShow;

  const showToggleMenu = showMenu ? styles.cross : styles.bars;

  return (
    <nav className={styles.mainNav}>
      <div
        className={styles.toggleMenu}
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <div className={`${showToggleMenu}`}></div>
      </div>
      <img src={sw} alt="star wars logo" className={styles.mainNav__logo} />
      <div className={`${styles.mainMenu} ${mainMenuShow}`}>
        <img src={sw} alt="star wars logo" className={styles.mainMenu__logo} />
        <ul className={styles.mainMenu__list}>
          <li className={styles.mainMenu__item}>
            <a href="." className={styles.mainMenu__link}>
              Sign In
            </a>
          </li>
          <li className={styles.mainMenu__item}>
            <a href="." className={styles.mainMenu__link}>
              Log In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
