import React from "react";
import Uno from "../assets/img/texturedOne.png";
import Dos from "../assets/img/texturedTwo.png";

import "../assets/css/pasos.css";

const Pasos = ({ pasos }) => {
  const { titulo_uno, titulo_dos, titulo_tres, titulo_cuatro } = pasos;
  return (
    <div>
      <div className="contenedor-general-componentes">
        <div className="contenedor-img-pasos">
          <img src={Uno} alt="paso uno" />
        </div>
        {/* CONTENIDO TITULO PARRAFO BTN */}
        <div className="contenedor-titulo-contenido">
          <div className="contenedor-titulo">
            <h1 className="titulo-compromiso">
              {titulo_uno} <br />{" "}
              <span className="modificador-titulo-compromiso">
                {titulo_dos}
              </span>
            </h1>
          </div>
          <div className="contenedor-bajada">
            <p className="bajada-pasos">
              Realiza una autoevaluación que te ayudará a conocer qué tan
              avanzada está tú obra, centro de trabajo o empresa en materia de
              <span className="modificar-texto-bajada"> sostenibilidad.</span>
            </p>
          </div>
          <div className="contenedor-btn-pasos">
            <button className="btn-pasos">Conoce más</button>
          </div>
        </div>
        {/* FINAL CONTENIDO TITULO PARRAFO BTN */}
      </div>

      <hr />

      <div className="contenedor-general-componentes">
        <div className="contenedor-img-pasos">
          <img src={Dos} alt="paso uno" />
        </div>
        {/* CONTENIDO TITULO PARRAFO BTN */}
        <div className="contenedor-titulo-contenido">
          <div className="contenedor-titulo">
            <h1 className="titulo-compromiso">
              {titulo_tres} <br />
              <span className="modificador-titulo-compromiso">
                {titulo_cuatro}
              </span>
            </h1>
          </div>
          <div className="contenedor-bajada">
            <p className="bajada-pasos">
              Conoce e implementa los protocolos, manuales, programas y guías
              que te ayudarán a acelerar tu camino hacia la
              <span className="modificar-texto-bajada"> sostenibilidad.</span>
            </p>
          </div>
          <div className="contenedor-btn-pasos">
            <button className="btn-pasos">Conoce más</button>
          </div>
        </div>
        {/* FINAL CONTENIDO TITULO PARRAFO BTN */}
      </div>

      <hr />
    </div>
  );
};

export default Pasos;
