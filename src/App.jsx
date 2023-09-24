import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Importa 'Routes'

import { ImagenProvider } from './context/ImagenContext';
import GaleriaImagenes from './component/GaleriaImagenes';
import GaleriaFavoritas from './component/GaleriaFavoritas';
import Navbar from './component/Navbar';

function App() {
  return (
    <ImagenProvider>
      <Router>
        <div className="App">
          <h1>Aplicación de Galería</h1>
          <Navbar />
          <Routes> 
            <Route path="/" element={<GaleriaImagenes />} />
            <Route path="/favoritos" element={<GaleriaFavoritas />} />
          </Routes>
        </div>
      </Router>
    </ImagenProvider>
  );
}

export default App;
