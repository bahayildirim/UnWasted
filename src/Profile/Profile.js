import "./Profile.style.css";
import Navbar from "../Navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Card } from "react-bootstrap";
import apple from "./Assets/apple.jpg";
import ArkaPlan from "./Assets/arkaplan.jpg";

import React, { useEffect } from "react";
import { useState } from "react";


export default function Profile() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(response => setData(response))

  }, [])
  return (



    <div className="main">

      <Navbar class="position-absolute" />

      <div className=" main2">
        <div className="profileInfo">
          {data && data.map((data) => (
            <div key={data.id} className="info">
              <p>{data.name}</p>
            </div>
          )
            
          )}
          <div className="info">
            <p>UserName</p>
          </div>
          <div className="info">
            <p>Password</p>
          </div>
          <div className="info">
            <p>Mail</p>
          </div>
          <div className="info">
            <p>Phone</p>
          </div>
          <div className="info">
            <p>Adress</p>
          </div>
          <button className="editbutton" > Edit </button>

        </div>
      </div>


    </div>

  );
}
/*
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";



<MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                <MDBRow className="g-0">
                  <MDBCol
                    md="4"
                    className="gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="my-5"
                      style={{ width: "80px" }}
                      fluid
                    />
                    <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                    <MDBCardText>Web Designer</MDBCardText>
                    <MDBIcon far icon="edit mb-5" />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">
                            info@example.com
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">
                            123 456 789
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">
                            info@example.com
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">
                            123 456 789
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>

                      <div className="d-flex justify-content-start">
                        <a href="#!">
                          <MDBIcon fab icon="facebook me-3" size="lg" />
                        </a>
                        <a href="#!">
                          <MDBIcon fab icon="twitter me-3" size="lg" />
                        </a>
                        <a href="#!">
                          <MDBIcon fab icon="instagram me-3" size="lg" />
                        </a>
                      </div>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer> */