import { useState } from 'react';
import ButtonForm from '../buttons/ButtonForm';
import Header from '../header/Header';
import InputForm from '../forms/InputForm';
import Navigation from '../navigation/Navigation';
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
            setData({
              userName: '',
              password: '',
            });
            localStorage.setItem('userStarWars', JSON.stringify(data));
            setUserCreated(true);
          }
        }}
      >
        <InputForm
          data-testid="userName"
          value={data.userName}
          label="User name"
          setData={setData}
          newKey="userName"
        />
        <InputForm
          data-testid="password"
          value={data.password}
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
