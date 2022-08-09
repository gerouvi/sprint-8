import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import LogIn from './components/log-in/LogIn';
import Ship from './components/ship/Ship';
import SignIn from './components/sign-in/SignIn';
import StarShips from './components/star-ships/StarShips';

const App = () => {
  localStorage.removeItem('userStarWarsLogged');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarShips />} />
        <Route path="/starships/:id" element={<Ship />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
