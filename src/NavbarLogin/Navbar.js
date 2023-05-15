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
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

import "./Navbar.style.css";

import Logo from "../Navbar/Assets/Logo.svg";

function NavScrollExample(props) {
  const [showBasic, setShowBasic] = useState(false);
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `login`; 
    navigate(path);
  }

  const Loginbutton = {
    backgroundColor: 'rgba(237, 207, 169, 0)',
    color: '#EDCFA9',
    border: 'none',
    fontSize: '1.0rem',
    borderRadius: '1.5rem',
    width: '9rem',
    height: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  };
  
  return (
    <MDBNavbar expand="lg" light>
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img src={Logo} height="30" alt="" loading="lazy" />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
          <MDBNavbarBrand>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            </MDBNavbarBrand>
            <MDBNavbarBrand>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                Products
              </MDBNavbarLink>
            </MDBNavbarItem>
            </MDBNavbarBrand>
            <MDBNavbarBrand>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                Contact
              </MDBNavbarLink>
            </MDBNavbarItem>
            </MDBNavbarBrand>
            <MDBNavbarBrand>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                About Us
              </MDBNavbarLink>
            </MDBNavbarItem>
            </MDBNavbarBrand>
          </MDBNavbarNav>
          <MDBNavbarBrand>
          <div className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control outline-0"
                placeholder="Search"
                aria-label="Search"
              />
              <MDBBtn color="amber" style={{ backgroundColor: 'transparent' }}>
                <i className="fas fa-search text-light"></i>
              </MDBBtn>
           </div>
          </MDBNavbarBrand>
          <MDBNavbarBrand>
          <MDBBtn color="#EDCFA9" style={Loginbutton}>Login/Signup</MDBBtn>
          </MDBNavbarBrand> 
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavScrollExample;
