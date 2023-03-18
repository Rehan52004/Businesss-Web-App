import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="white" expand="lg" className="pt-2">
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ fontSize: "2rem", color: "#3498db" }}
          >
            TheAbdul.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link activeClassName="menu-active">
                <NavLink to="/" className="nav-icon">
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link activeClassName="menu-active">
                <NavLink to="/services" className="nav-icon">
                  Services
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  activeClassName="menu-active"
                  to="/about"
                  className="nav-icon"
                >
                  About Us
                </NavLink>
              </Nav.Link>
              <Nav.Link activeClassName="menu-active">
                <NavLink to="/contact" className="nav-icon">
                  Contact
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
