import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Ship from './components/Ship/Ship';
import SignIn from './components/SignIn/SignIn';
import StarShips from './components/StarShips/StarShips';

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
