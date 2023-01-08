import React from "react";
import Cchc from "../assets/img/logo-cchc.svg";
import "../assets/css/navbar.css";

const Navbar = () => {
  const toggleMenu = () => {
    // alert("funcionando");
    document.body.classList.toggle("open");
  };
  return (
    <>
      <nav className="navbar">
        <button onClick={()=> toggleMenu()} className="burger button-compromiso">
          {/* <i class="fa-sharp fa-solid fa-bars"></i> */}
        </button>

        {/* LOGOTIPO - CCHC */}
        <button className="button button-compromiso">
          {/* <img src={Cchc} alt="logo-cchc" /> */}
          HOME
        </button>
        {/* FINAL LOGOTIPO - CCHC */}

        {/* CONTENEDOR - INTERNO */}
        <div className="dropdowns">
          {/* Services */}
          <div className="dropdown">
            <button className="button button-compromiso">
              Services
              <i className="fa-sharp fa-solid fa-chevron-down"></i>
            </button>
            <div className="dropdown-menu">
              <button className="button-compromiso">UI/UX Consultancy</button>
              <button className="button-compromiso">Website Developer</button>
              <button className="button-compromiso">SEO Advice</button>
            </div>
          </div>
          {/* other dropdowns */}
          <div className="dropdown">
            <button className="button button-compromiso">
              Products
              <i className="fa-sharp fa-solid fa-chevron-down"></i>
            </button>
            <div className="dropdown-menu">
              <button className="button-compromiso">UI/UX Consultancy 1</button>
              <button className="button-compromiso">Website Developer 1</button>
              <button className="button-compromiso">SEO Advice 1</button>
            </div>
          </div>
          {/* Products */}
          <div className="dropdown">
            <button className="button button-compromiso">
              Contacto
              <i className="fa-sharp fa-solid fa-chevron-down"></i>
            </button>
            <div className="dropdown-menu">
              <button className="button-compromiso">UI/UX Consultancy 2</button>
              <button className="button-compromiso">Website Developer 2</button>
              <button className="button-compromiso">SEO Advice 2</button>
            </div>
          </div>
          {/* Support */}
          <div className="dropdown">
            <button className="button button-compromiso">
              Supports
              <i className="fa-sharp fa-solid fa-chevron-down"></i>
            </button>
            <div className="dropdown-menu">
              <button className="button-compromiso">UI/UX Consultancy 3</button>
              <button className="button-compromiso">Website Developer 3</button>
              <button className="button-compromiso">SEO Advice 3</button>
            </div>
          </div>
          {/* FINAL CONTENEDOR - INTERNO */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
