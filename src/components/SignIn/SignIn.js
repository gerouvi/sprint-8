import { useState } from 'react';
import ButtonForm from '../ButtonForm/ButtonForm';
import Header from '../Header/Header';
import InputForm from '../InputForm/InputForm';
import Navigation from '../Navigation/Navigation';
import styles from './SignIn.module.css';

const SignIn = () => {
  const [data, setData] = useState({
    userName: '',
    password: '',
  });

  const [userCreated, setUserCreated] = useState(false);

  return (
    <>
      <Header />
      <Navigation />
      <h1 className={styles.title}>Sign in</h1>
      <form
        className={styles.wrapperForm}
        onSubmit={(e) => {
          e.preventDefault();
          if (data.userName && data.password) {
            localStorage.setItem('userStarWars', JSON.stringify(data));
            setData({
              userName: '',
              password: '',
            });
            setUserCreated(true);
          }
        }}
      >
        <InputForm label="User name" setData={setData} newKey="userName" />
        <InputForm
          label="Password"
          setData={setData}
          newKey="password"
          type="password"
        />

        <ButtonForm>Register</ButtonForm>
        {userCreated && <span>User Created</span>}
      </form>
    </>
  );
};

export default SignIn;
