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
import Axios from "axios";

export default function Profile() {
  const [change, setChange] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [fullname, setfullname] = useState("");
  const [phone_no, setPhone] = useState("");
  const [address, setaddress] = useState("");
  const [user, setUser] = useState({});
  const [changedData, setChangedData] = useState({});

  const id = 3;

  function handleForm(state) {
    setChange(!state);
  }

  const handleFormChange = (event) => {
    setChangedData({ ...changedData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    Axios.get("http://localhost:8080/profile/" + id).then((response) => {
      setUser(response.data);
      setChangedData(response.data);
    });
  }, []);

  const edit = (event) => {
    Axios.put(`http://localhost:8080/profile/${user.id}`, changedData, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setUser(response.data);
      setChangedData(response.data);
    });
    window.location.reload();
    event.preventDefault();
  };

  return (
    <div className="main">
      <section className="vh-100" style={{ backgroundImage: { ArkaPlan } }}>
        <Navbar />
        <MDBContainer className="py-10 h-100" fluid>
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
                    <MDBTypography tag="h5">{user.fullname}</MDBTypography>
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
                                  <div>
                                    <input
                                      type="text"
                                      id="fullname"
                                      class="form-control"
                                      value={changedData.fullname || " "}
                                      name="fullname"
                                      onChange={handleFormChange}
                                    />
                                  </div>
                                ) : (
                                  <MDBCardText className="text-muted">
                                    {user.fullname}
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
                                      onChange={(e) =>
                                        setpassword(e.target.value)
                                      }
                                    />
                                  </MDBInputGroup>
                                ) : (
                                  <MDBCardText className="text-muted">
                                    {user.password}
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
                                      onChange={(e) => setEmail(e.target.value)}
                                    />
                                  </MDBInputGroup>
                                ) : (
                                  <MDBCardText className="text-muted">
                                    {user.email}
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
                                      onChange={(e) => setPhone(e.target.value)}
                                    />
                                  </MDBInputGroup>
                                ) : (
                                  <MDBCardText className="text-muted">
                                    {user.phone_no}
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
                                      onChange={(e) =>
                                        setaddress(e.target.value)
                                      }
                                    />
                                  </MDBInputGroup>
                                ) : (
                                  <MDBCardText className="text-muted">
                                    {user.address}
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
                          onClick={edit}
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
