import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pokemons from './pages/Pokemons';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hearthstone/:cards" element={<Pokemons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
