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
import Axios from "axios";

function NavScrollExample() {
  const [showBasic, setShowBasic] = useState(false);
  let navigate = useNavigate();
  const routeChange = () => {
    Axios.get("http://localhost:8080/logout", { withCredentials: true });
    let path = `login`;
    navigate(path);
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
                <MDBNavbarLink active aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarBrand>
            <MDBNavbarBrand>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  Packages
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarBrand>
            <MDBNavbarBrand>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  Review
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

          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
            <MDBBtn color="#EDCFA9" className="button">
              <i class="fas fa-search"></i>
            </MDBBtn>
          </form>
          <form className="d-flex input-group w-auto">
            <MDBBtn
              outline
              color="#EDCFA9"
              className="button"
              size="ml"
              type="button"
              onClick={routeChange}
            >
              SignOut
            </MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavScrollExample;
