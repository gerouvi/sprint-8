import { useEffect, useState } from 'react';
import ButtonForm from '../ButtonForm/ButtonForm';
import Header from '../Header/Header';
import InputForm from '../InputForm/InputForm';
import Navigation from '../Navigation/Navigation';
import styles from './LogIn.module.css';

const LogIn = () => {
  const [data, setData] = useState({
    userName: '',
    password: '',
  });

  const [localStroageData, setLocalStorageData] = useState({});

  const [correctCredentials, setCorrectCredentials] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem('userStarWars')) return;
    setLocalStorageData(JSON.parse(localStorage.getItem('userStarWars')));
  }, []);

  const handlerCheckCredentials = () => {
    const dataUser = Object.values(data);
    const dataLocalStorage = Object.values(localStroageData);

    if (
      dataUser[0] === dataLocalStorage[0] &&
      dataUser[1] === dataLocalStorage[1]
    ) {
      setCorrectCredentials(1);
    } else setCorrectCredentials(2);
  };

  return (
    <>
      <Header />
      <Navigation />
      <h1 className={styles.title}>Log in</h1>
      <form
        className={styles.wrapperForm}
        onSubmit={(e) => {
          e.preventDefault();
          handlerCheckCredentials();
        }}
      >
        <InputForm label="User name" setData={setData} newKey="userName" />
        <InputForm
          label="Password"
          setData={setData}
          newKey="password"
          type="password"
        />

        <ButtonForm>Enter</ButtonForm>
        {correctCredentials === 1 && (
          <sapn className={styles.correct}>Correct credentials</sapn>
        )}
        {correctCredentials === 2 && (
          <span className={styles.incorrect}>Incorrect credentials</span>
        )}
      </form>
    </>
  );
};
export default LogIn;
