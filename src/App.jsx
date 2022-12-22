import Banner from "./components/Banner";
import Pasos from "./components/Pasos";
import SegundoPasos from "./components/SegundoPasos";

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
  };

  return (
    <div>
      <Banner datoBanner={datoBanner} />
      <Pasos pasos={pasos} />
    </div>
  );
}

export default App;
