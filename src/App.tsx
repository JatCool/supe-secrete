// src/App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/firstPage';
import SliderPage from './Pages/sliderPage';



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/slider" element={<SliderPage />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;