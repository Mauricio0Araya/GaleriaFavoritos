import React  from 'react';
import "../assets/css/galeria.css";
import { useImagen } from '../context/ImagenContext';
import Heart from "../component/Heart";

function GaleriaImagenes() {
  const { imagenes, imagenesFavoritas, setImagenesFavoritas } = useImagen();

  const toggleFavorito = (id) => {
    if (imagenesFavoritas.includes(id)) {
      // Si ya es favorito, quitarlo de la lista de favoritos
      setImagenesFavoritas(imagenesFavoritas.filter((favId) => favId !== id));
    } else {
      // Si no es favorito, agregarlo a la lista de favoritos
      setImagenesFavoritas([...imagenesFavoritas, id]);
    }
  };

  return (
    <div className="galeria">
      {imagenes.map((imagen) => (
        <div className="galeria grid-columns-5 p-3 imagen-container" key={imagen.id}>
          <img src={imagen.src.medium} alt={imagen.alt} className="foto imagen" />
          <button
            onClick={() => toggleFavorito(imagen.id)}
            className={`corazon ${imagenesFavoritas.includes(imagen.id) ? 'favorito' : ''}`}
          >
            <Heart filled={imagenesFavoritas.includes(imagen.id)} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default GaleriaImagenes;