import "./Encabezado.css";
import { CarWidget } from "../CarWidget/carwidget.jsx";

export const Encabezado = function () {
  return (
    <header className="header">
      <h1>Soy coder</h1>
      <nav className="header-nav">
        <a href="">link 1</a>
        <a href="">link 2</a>
        <a href="">link 3</a>
        <CarWidget />
      </nav>
    </header>
  );
};
