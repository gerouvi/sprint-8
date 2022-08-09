import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';

const Home = () => {
  const [showHome, setShowHome] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('userStarWarsLogged')) navigate('/login');
    else setShowHome(true);
  }, [navigate]);

  if (!showHome) return;

  return (
    <>
      <Header />
      <Navigation />
      <div className={styles.wrapperParagraphs}>
        <p className={styles.paragraph}>
          Bienvenido a la Home web de Star Wars donde podrás ver un listado de
          naves y ver el detalle de cada una de ellas.
        </p>
        <p className={styles.paragraph}>
          Si no estás loggeado no tendrás acceso a la totalidad de la web.
        </p>
        <p className={styles.paragraph}>
          Para ver el listado ves a STARSHIPS y para registrarte o acceder a tu
          cuenta utliza los botones de arriba a la derecha.
        </p>
      </div>
    </>
  );
};

export default Home;
