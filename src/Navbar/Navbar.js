import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Stack,
  Card,
} from "react-bootstrap";

import "./Navbar.style.css";

import Logo from "../Navbar/Assets/Logo.svg";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" className="nav">
      <Container fluid className="nav">
        <Navbar.Brand href="#">
          <img src={Logo} className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Stack direction="horizontal" gap={5} className=" mx-auto">
              <Nav.Link href="#action1" className="nav-text">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="nav-text">
                Packages
              </Nav.Link>
              <Nav.Link href="#action3" className="nav-text">
                Review
              </Nav.Link>
              <Nav.Link href="#action4" className="nav-text">
                About Us
              </Nav.Link>
            </Stack>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 search-bar"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
