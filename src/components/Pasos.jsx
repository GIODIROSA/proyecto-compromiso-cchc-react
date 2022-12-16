import React from "react";
import Uno from "../assets/img/texturedOne.png";
import "../assets/css/pasos.css";

const Pasos = ({ pasos }) => {
  const { titulo_uno, titulo_dos, bajada_pasos } = pasos;
  return (
    <div>
      <div className="contenedor-img-pasos">
        <img src={Uno} alt="paso uno" />
      </div>
      <div className="contenedor-titulo">
        <h1>
          {titulo_uno} <br /> {titulo_dos}
        </h1>
      </div>
      <div className="contenedor-bajada">
        <p className="bajada-pasos">{bajada_pasos}</p>
      </div>
      <div className="contenedor-btn-pasos">
        <button className="btn-pasos">Conoce más</button>
      </div>
    </div>
  );
};

export default Pasos;
