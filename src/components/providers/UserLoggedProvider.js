import { useState } from 'react';
import { UserLogged } from '../../lib/contexts/UserLogged';

const UserLoggedProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(false);
  return (
    <UserLogged.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </UserLogged.Provider>
  );
};

export default UserLoggedProvider;
