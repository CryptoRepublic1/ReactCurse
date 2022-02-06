import "./Encabezado.css";
import { CarWidget } from "../CarWidget/carwidget.jsx";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Link as Link} from "react-router-dom";
// import { Link } from "@mui/material";


export const Encabezado2 = function(){
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">

    logo
      <img
        src="/logo.svg"
        width="5"
        height="30"
        className="d-inline-block align-top"
        alt=""
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

      <Nav.Link  as={Link} to="/productos"> Productos</Nav.Link>
      <NavDropdown title="Colecciones" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/productos/Zapatillas">Zapatillas</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/productos/Poleras">Poleras</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/productos/Polerones">Polerones</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      <Nav.Link  href="#pricing">Ofertas</Nav.Link>

      
    
    </Nav>
    <Nav>
      <Nav.Link href="#deets">¿Quienes Somos?</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      <CarWidget />
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}