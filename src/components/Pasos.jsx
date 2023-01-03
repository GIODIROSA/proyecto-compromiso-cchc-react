import React from "react";
import Uno from "../assets/img/texturedOne.png";
import Dos from "../assets/img/texturedTwo.png";
import Tres from "../assets/img/texturedThree.png";
import Cuatro from "../assets/img/texturedFour.png";
import Cinco from "../assets/img/texturedFive.png";

import "../assets/css/pasos.css";

const Pasos = ({ pasos }) => {
  const {
    titulo_uno,
    titulo_dos,
    titulo_tres,
    titulo_cuatro,
    titulo_cinco,
    titulo_seis,
    titulo_siete,
    titulo_ocho,
    titulo_nueve,
    titulo_diez,
    titulo_once,
    titulo_doce,
  } = pasos;
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

      <hr className="linea-divisoria" />

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
              <b className="modificar-texto-bajada"> sostenibilidad.</b>
            </p>
          </div>
          <div className="contenedor-btn-pasos">
            <button className="btn-pasos">Conoce más</button>
          </div>
        </div>
        {/* FINAL CONTENIDO TITULO PARRAFO BTN */}
      </div>

      <hr className="linea-divisoria" />

      <div className="contenedor-general-componentes">
        <div className="contenedor-img-pasos">
          <img src={Tres} alt="paso uno" />
        </div>
        {/* CONTENIDO TITULO PARRAFO BTN */}
        <div className="contenedor-titulo-contenido">
          <div className="contenedor-titulo">
            <h1 className="titulo-compromiso">
              {titulo_cinco} <br />
              <span className="modificador-titulo-compromiso">
                {titulo_seis}
              </span>
            </h1>
          </div>
          <div className="contenedor-bajada">
            <p className="bajada-pasos">
              Conoce las
              <b className="modificar-texto-bajada">experiencias destacadas</b>
              de empresas, obras y centros de trabajo de diferentes regiones del
              país.
            </p>
          </div>
          <div className="contenedor-btn-pasos">
            <button className="btn-pasos">Conoce más</button>
          </div>
        </div>
        {/* FINAL CONTENIDO TITULO PARRAFO BTN */}
      </div>

      <hr className="linea-divisoria" />

      <div className="contenedor-general-componentes">
        <div className="contenedor-img-pasos">
          <img src={Cuatro} alt="paso uno" />
        </div>
        {/* CONTENIDO TITULO PARRAFO BTN */}
        <div className="contenedor-titulo-contenido">
          <div className="contenedor-titulo">
            <h1 className="titulo-compromiso">
              {titulo_siete} <br />
              <span className="modificador-titulo-compromiso">
                {titulo_ocho}
              </span>
            </h1>
          </div>
          <div className="contenedor-bajada">
            <p className="bajada-pasos">
              El
              <b className="modificar-texto-bajada"> Sello PRO </b>
              es el reconocimiento al trabajo bien hecho en el ámbito de la
              sostenibilidad otorgado por{" "}
              <b className="modificar-texto-bajada">COMPROMISO PRO.</b>
            </p>
          </div>
          <div className="contenedor-btn-pasos">
            <button className="btn-pasos">Conoce más</button>
          </div>
        </div>
        {/* FINAL CONTENIDO TITULO PARRAFO BTN */}
      </div>

      <hr className="linea-divisoria" />

      <div className="contenedor-general-componentes">
        <div className="contenedor-img-pasos">
          <img src={Cinco} alt="paso uno" />
        </div>
        {/* CONTENIDO TITULO PARRAFO BTN */}
        <div className="contenedor-titulo-contenido">
          <div className="contenedor-titulo">
            <h1 className="titulo-compromiso">
              {titulo_once} <br />
              <span className="modificador-titulo-compromiso">
                {titulo_doce}
              </span>
            </h1>
          </div>
          <div className="contenedor-bajada">
            <p className="bajada-pasos">
              Conoce las diversas actividades del
              <b className="modificar-texto-bajada"> COMPROMISO PRO </b>
              de las cuales puedes participar.
            </p>
          </div>
          <div className="contenedor-btn-pasos">
            <button className="btn-pasos">Conoce más</button>
          </div>
        </div>
        {/* FINAL CONTENIDO TITULO PARRAFO BTN */}
      </div>
    </div>
  );
};

export default Pasos;
