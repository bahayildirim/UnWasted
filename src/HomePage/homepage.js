import Navbar from "../Navbar/Navbar.js";
import "./homepage.css";
import {
  MDBFooter,
  MDBContainer,
  MDBView,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBInput,
} from "mdb-react-ui-kit";
import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [productName, setProductName] = useState();
  const [stock, setStock] = useState();
  const [describe, setDescribe] = useState();
  const [time, setTime] = useState();
  const [donators, setDonators] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/topdonators").then((response) => {
      setDonators(response.data);
    });
  }, []);

  return (
    <div>
      <div className="bg">
        <Navbar />
      </div>
      <div className="d-flex">
        <MDBCard
          className="kart"
          style={{ width: "22rem", marginRight: "1rem" }}
        >
          <MDBCardImage
            src="https://via.placeholder.com/400x200"
            alt="Card image cap"
          />
          <MDBCardBody>
            <MDBCardTitle>Card 1 Title</MDBCardTitle>
            <MDBCardText>
              This is some text within a card body. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="kart" style={{ width: "22rem" }}>
          <MDBCardImage
            src="https://via.placeholder.com/400x200"
            alt="Card image cap"
          />
          <MDBCardBody>
            <MDBCardTitle>Card 2 Title</MDBCardTitle>
            <MDBCardText>
              This is some text within a card body. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        {donators.map((donator) => {
          const imagePath =
            process.env.PUBLIC_URL + `/Images/CompanyLogos/${donator.logo}`;
          return (
            <MDBCard className="kart" style={{ width: "22rem" }}>
              <MDBCardImage
                src={imagePath}
                alt="Card image cap"
                className="kart-image"
              />
              <MDBCardBody>
                <MDBCardTitle>{donator.fullname}</MDBCardTitle>
                <MDBCardText>denemememememememe</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          );
        })}
        <MDBCard className="kart" style={{ width: "22rem" }}>
          <MDBCardImage
            src="https://via.placeholder.com/400x200"
            alt="Card image cap"
          />
          <MDBCardBody>
            <MDBCardTitle>Card 2 Title</MDBCardTitle>
            <MDBCardText>
              This is some text within a card body. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
      <MDBFooter
        bgColor="#EDCFA9"
        className="text-center text-lg-start text-muted"
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  UnWasted
                </h6>
                <p>
                  We say no to food waste! We aim to bring together the buyer
                  and the donor under a single platform.
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  Atilim University
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  info@unwasted.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" />{" "}
                  +90 530 793 1946
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: "#EDCFA9" }}>
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            UnWasted.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default App;
