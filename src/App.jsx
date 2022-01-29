import { Encabezado } from "./Componentes/NavBar/Encabezado";
import { ItemConteiner } from "./Componentes/ItemConteiner/itemConteiner";
import { BarMui } from "./Componentes/BarMui/BarMui";

function App() {
  return (
    <>
      <Encabezado />
      <ItemConteiner greating="hola soy coder" />
    </>
  );
}

export default App;
