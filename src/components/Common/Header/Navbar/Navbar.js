import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function SetNavBar() {

   const {userInfo}=useSelector(state=>state.Login);


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"  style={{border:"none", fontWeight:"bold"}}>BookHouse</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link to="/" className="text-decoration-none text-black navbar px-3 btn btn-outline-info"
              style={{border:"none", fontWeight:"bold"}}>Home</Link>
            <Link to="/addbook" className="text-decoration-none text-black navbar px-3 btn btn-outline-info"
              style={{border:"none", fontWeight:"bold"}}>About</Link>
            {
              !userInfo || userInfo.length<1 ?  <Link to="/login" className="text-decoration-none text-black navbar px-3 btn btn-outline-info"
             style={{border:"none", fontWeight:"bold"}}>Login</Link>
             :<a href="/login" className="text-decoration-none text-black navbar px-3 btn btn-outline-info"
             style={{border:"none", fontWeight:"bold"}}>Logout</a>
            }
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SetNavBar;