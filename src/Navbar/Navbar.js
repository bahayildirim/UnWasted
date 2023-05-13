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
import React, { useState, useEffect } from "react";
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

import Axios from "axios";

import Logo from "../Navbar/Assets/Logo.svg";

function NavScrollExample(props) {
  const [showBasic, setShowBasic] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/profile", { withCredentials: true }).then(
      (response) => {
        setUser(response.data);
      }
    );
  }, []);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `login`;
    navigate(path);
  };

  const toggleStyle = {
    backgroundColor: "#E89F71",
    color: "#AA4A30",
    border: "none",
    fontSize: "1.2rem",
  };

  const menuStyle = {
    backgroundColor: "#E89F71",
    color: "white",
    width: "200px",
    borderRadius: "10px",
    fontSize: "1.2rem",
    padding: "10px",
  };

  function logout() {
    Axios.get("http://localhost:8080/logout", {
      withCredentials: true,
    });
  }
  return (
    <MDBNavbar expand="lg" light>
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
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
            <MDBNavbarBrand>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="contactUs">
                  Contact Us
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarBrand>
            {user.isAdmin ? (
              <MDBNavbarBrand>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current="page" href="adminPage">
                    Contact Forms
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarBrand>
            ) : null}
          </MDBNavbarNav>

          <MDBDropdown group className="shadow-0">
            <MDBDropdownToggle style={toggleStyle}>
              <MDBIcon fas icon="user-ninja" /> Donerci
            </MDBDropdownToggle>
            <MDBDropdownMenu style={menuStyle}>
              <MDBDropdownItem link href="/">
                Profile
              </MDBDropdownItem>
              <MDBDropdownItem link>Orders</MDBDropdownItem>
              <MDBDropdownItem link href="/login" onClick={logout}>
                LogOut
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavScrollExample;
