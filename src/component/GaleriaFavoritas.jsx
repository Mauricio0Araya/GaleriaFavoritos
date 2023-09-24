import React from 'react';
import "../assets/css/galeria.css";
import { useImagen } from '../context/ImagenContext';

function GaleriaFavoritas() {

  // Obtener las imágenes favoritas del contexto
  const { imagenes,imagenesFavoritas } = useImagen();

  // Filtrar las imágenes favoritas
  const imagenesMostradas = imagenes.filter((imagen) => imagenesFavoritas.includes(imagen.id));

  return (
    <div className="galeria">
      {imagenesMostradas.map((imagen) => (
        <div key={imagen.id} className="galeria grid-columns-5 p-3 imagen-container">
          <img src={imagen.src.medium} alt={imagen.alt} className="foto imagen" />
        </div>
      ))}
    </div>
  );
}

export default GaleriaFavoritas;
