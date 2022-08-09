import { useEffect, useState } from 'react';
import ButtonForm from '../buttons/ButtonForm';
import InputForm from '../forms/InputForm';
import Navigation from '../navigation/Navigation';
import styles from './LogIn.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';

const LogIn = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    userName: '',
    password: '',
  });

  const [correctCredentials, setCorrectCredentials] = useState(undefined);

  const [localStroageData, setLocalStorageData] = useState({});

  useEffect(() => {
    if (!localStorage.getItem('userStarWars')) return;
    setLocalStorageData(JSON.parse(localStorage.getItem('userStarWars')));
  }, []);

  const handlerCheckCredentials = () => {
    const [userName, password] = Object.values(data);
    const [userNameLocalStorage, passwordLocalStorage] =
      Object.values(localStroageData);

    if (
      userName === userNameLocalStorage &&
      password === passwordLocalStorage
    ) {
      setCorrectCredentials(true);
      setData({
        userName: '',
        password: '',
      });
      localStorage.setItem('userStarWarsLogged', true);
      navigate('/');
    } else setCorrectCredentials(false);
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
        <InputForm
          value={data.userName}
          label="User name"
          setData={setData}
          newKey="userName"
        />
        <InputForm
          value={data.password}
          label="Password"
          setData={setData}
          newKey="password"
          type="password"
        />

        <ButtonForm>Enter</ButtonForm>
        {correctCredentials === false && (
          <span className={styles.incorrect}>Incorrect credentials</span>
        )}
      </form>
    </>
  );
};
export default LogIn;
