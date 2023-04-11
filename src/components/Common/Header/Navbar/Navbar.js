import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function SetNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">BookHouse</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link >
            <Link to="/" className="text-decoration-none text-black">Home</Link>

            </Nav.Link>
            <Nav.Link >
            <Link to="/addbook" className="text-decoration-none text-black">About</Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/login" className="text-decoration-none text-black">Login</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SetNavBar;