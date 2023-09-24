import React, { createContext, useContext, useState, useEffect } from 'react';
import imagenesData from '../assets/json/fotos.json';

const ImagenContext = createContext(); 

export function ImagenProvider({ children }) {
  const [imagenes, setImagenes] = useState([]);
  const [imagenesFavoritas, setImagenesFavoritas] = useState([]);

  useEffect(() => {
    // Cargar las imágenes desde el archivo JSON al inicializar el contexto
    
    setImagenes(imagenesData.photos);
    
  }, []);

  return (
    <ImagenContext.Provider value={{ imagenes, imagenesFavoritas, setImagenesFavoritas}}>
      {children}
    </ImagenContext.Provider>
  );
}

export function useImagen() {
    return useContext(ImagenContext);
  }
// ...
