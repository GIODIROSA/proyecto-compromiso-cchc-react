import React from "react";
import Uno from "../assets/img/texturedTwo.png";


const SegundoPasos = ({ pasos }) => {
  const { titulo_uno, titulo_dos, bajada_pasos } = pasos;
  return (
    <>
      <div className="contenedor-img-pasos">
        <img src={Uno} alt="paso uno" />
      </div>
      <div className="contenedor-titulo">
        <h1>
          {titulo_uno} <br /> {titulo_dos}
        </h1>
      </div>
      <div className="contenedor-bajada">
        <p className="bajada-pasos">
          
        </p>
      </div>
      <div className="contenedor-btn-pasos">
        <button className="btn-pasos">Conoce más</button>
      </div>
    </>
  );
};

export default SegundoPasos;
