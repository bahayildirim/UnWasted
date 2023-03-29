import "./Profile.style.css";
import Navbar from "../Navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Card } from "react-bootstrap";
import apple from "./Assets/apple.jpg";
import ArkaPlan from "./Assets/arkaplan.jpg";
import { useState, useEffect } from "react";
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
  MDBBtn,
  MDBInput,
  MDBInputGroup,
} from "mdb-react-ui-kit";

export default function Profile() {
  const [change, setChange] = useState("flase");
  const [username, setUserName] = useState("");

  function handleForm(state) {
    setChange(!state);
  }

  return (
    <div className="main">
      <section className="vh-100" style={{ backgroundImage: { ArkaPlan } }}>
        <Navbar />
        <MDBContainer className="py-10 h-100">
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
                    <MDBCardText>Donator/Buyer</MDBCardText>
                    <MDBBtn
                      className="ms-2"
                      tag="a"
                      outline
                      rounded
                      color="light"
                      floating
                      onClick={() => handleForm(change)}
                    >
                      <MDBIcon fas icon="edit" />
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBRow className="pt-1">
                        <MDBCard className="mb-5">
                          <MDBCardBody>
                            <MDBRow>
                              <MDBCol sm="3">
                                <MDBCardText>Full Name</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                {change ? (
                                  <MDBInputGroup className="mb-3">
                                    <input
                                      className="form-control"
                                      placeholder="Johnatan Smith"
                                      type="text"
                                      onChange={(e) =>
                                        setUserName(e.target.value)
                                      }
                                    />
                                  </MDBInputGroup>
                                ) : (
                                  <MDBCardText className="text-muted">
                                    {username}
                                  </MDBCardText>
                                )}
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol sm="3">
                                <MDBCardText>Password</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                {change ? (
                                  <MDBInputGroup className="mb-3">
                                    <input
                                      className="form-control"
                                      type="password"
                                    />
                                  </MDBInputGroup>
                                ) : (
                                  <MDBCardText className="text-muted">
                                    **
                                  </MDBCardText>
                                )}
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol sm="3">
                                <MDBCardText>Email</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                {change ? (
                                  <MDBInputGroup className="mb-3">
                                    <input
                                      className="form-control"
                                      type="email"
                                    />
                                  </MDBInputGroup>
                                ) : (
                                  <MDBCardText className="text-muted">
                                    example@example.com
                                  </MDBCardText>
                                )}
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol sm="3">
                                <MDBCardText>Phone</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                {change ? (
                                  <MDBInputGroup className="mb-3">
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
                                  </MDBInputGroup>
                                ) : (
                                  <MDBCardText className="text-muted">
                                    (097) 234-5678
                                  </MDBCardText>
                                )}
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol sm="3">
                                <MDBCardText>Address</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                {change ? (
                                  <MDBInputGroup className="mb-3">
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
                                  </MDBInputGroup>
                                ) : (
                                  <MDBCardText className="text-muted">
                                    Bay Area, San Francisco, CA
                                  </MDBCardText>
                                )}
                              </MDBCol>
                            </MDBRow>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBRow>
                    </MDBCardBody>
                    {change && (
                      <MDBContainer fluid className="button-container">
                        <MDBBtn
                          rounded
                          className="col-5 border border-0"
                          size="lg"
                          style={{ backgroundColor: "#AA4A30" }}
                          href="#"
                        >
                          Save
                        </MDBBtn>
                      </MDBContainer>
                    )}
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}

/*export default function Profile() {
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
}*/
