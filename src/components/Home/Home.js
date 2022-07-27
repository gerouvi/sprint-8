import { useContext } from 'react';
import { UserLogged } from '../../lib/contexts/UserLogged';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import styles from './Home.module.css';

const Home = () => {
  const { userLogged, setUserLogged } = useContext(UserLogged);

  // if (!userLogged) Location.push('/login');
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
