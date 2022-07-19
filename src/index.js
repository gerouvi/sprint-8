import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './styles/index.css';
import StarShips from './components/StarShips/StarShips';
import Ship from './components/Ship/Ship';
import LogIn from './components/LogIn/LogIn';
import SignIn from './components/SignIn/SignIn';
import Home from './components/Home/Home';

const Child = () => {
  const location = useLocation();
  console.log(location.pathname);
  return <h1 style={{ color: 'white' }}>{location.pathname}</h1>;
};

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: 'spaceships',
    component: App,
    children: [
      {
        path: ':id',
        component: Child,
      },
    ],
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
