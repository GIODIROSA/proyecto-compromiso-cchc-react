import Banner from "./components/Banner";
import Pasos from "./components/Pasos";

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
    bajada_pasos:
      "Realiza una autoevaluación que te ayudará a conocer qué tan avanzada está tú obra, centro de trabajo o empresa en materia de sostenibilidad.",
  };

  return (
    <div>
      <Banner datoBanner={datoBanner} />
      <Pasos pasos={pasos} />
    </div>
  );
}

export default App;
