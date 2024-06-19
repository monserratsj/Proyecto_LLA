import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">LLA : Liga Latinoamérica</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/teams">Teams</Nav.Link>
            <Nav.Link href="/matches">Matches</Nav.Link>
            <NavDropdown title="Estadisticas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/playerstats">Por Jugador</NavDropdown.Item>
              <NavDropdown.Item href="/teamstats">
                Por  equipo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">De la Liga</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Jaja no sé que poner
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;