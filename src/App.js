import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Characters from './pages/characters/Characters';
import Home from './pages/home/Home';
import CharacterInfo from './pages/characterInfo/CharacterInfo';
import Info from './pages/info/Info';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:characterId" element={<CharacterInfo />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
