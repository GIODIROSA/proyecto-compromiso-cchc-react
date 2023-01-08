import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Pasos from "./components/Pasos";
import Footer from "./components/Footer";


function App() {
  const datoBanner = {
    titulo: "SÚMATE AL",
    titulo_dos: "COMPROMISO PRO",
    bajada: "TE ACOMPAÑAMOS A MEJORAR LA SOSTENIBILIDAD",
    bajada_dos: "SOCIAL, AMBIENTAL Y ECONÓMICA DE TU EMPRESA",
    call: "COMIENZA AQUÍ TU COMPROMISO",
  };

  const pasos = {
    titulo_uno: "AUTOEVALÚA TU",
    titulo_dos: "DESEMPEÑO",
    titulo_tres: "USA",
    titulo_cuatro: "HERRAMIENTAS",
    titulo_cinco: "APRENDE DE",
    titulo_seis: "OTROS",
    titulo_siete: "SÚMATE AL",
    titulo_ocho: "SELLO PRO",
    titulo_nueve: "INFORMA Y",
    titulo_diez: "PARTICIPA",
    titulo_once: "INFORMA Y",
    titulo_doce: "PARTICIPA",
  };

  return (
    <div>
      <Navbar/>
      <Banner datoBanner={datoBanner} />
      <Pasos pasos={pasos} />
      <Footer />
    </div>
  );
}

export default App;
