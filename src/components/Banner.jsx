import React from "react";
import "../assets/css/banner.css";
import imagenBanner from "../assets/img/banner.jpg";
import flechaIcon from "../assets/img/fecha-logo.svg";
const Banner = ({ datoBanner }) => {
  const { titulo, titulo_dos, bajada, bajada_dos, call } = datoBanner;

  return (
    <div className="contenedor-banner-general">
      <div className="contenedor-img-banner">
        <img src={imagenBanner} alt={titulo} />
      </div>
      <div className="bg-img"></div>
      <div className="contenedor-titulo-banner-principal">
        <h1 className="titulo-banner-principal">
          {titulo} <br /> {titulo_dos}
        </h1>
        <p className="bajada-banner-principal">
          {bajada} <br /> {bajada_dos}
        </p>
      </div>
      <div className="contenedor-call-action-banner">
        <p className="call-action-banner">{call}</p>
      </div>
      <div className="contenedor-isologotipo-banner">
        <img src={flechaIcon} alt={titulo} />
      </div>
    </div>
  );
};

export default Banner;
