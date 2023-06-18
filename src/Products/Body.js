import React, { useEffect, useState } from "react";
import list from "./data";
import "./body.css";
import Axios from "axios";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
} from "mdb-react-ui-kit";

const Amazon = ({ handleClick, products, cartlength }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState([]);
  

  useEffect(() => {
    Axios.get("http://localhost:8080/cartItem", { withCredentials: true }).then(
      (res) => {
        setCart(res.data);
        console.log("cart verisi " + cart[0].id);
      }
    );
  }, []);

  useEffect(() => {
    products.forEach((product) => {
      Axios.get("http://localhost:8080/profile/" + product.user_id).then(
        (response) => {
          setUser((prevUsers) => [...prevUsers, response.data]);
          console.log("user değeri: " + response.data.fullname);
        }
      );
    });
  }, [products]);

  return (
    <section className="generalBody">
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map((product, index) => (
        <MDBCard className="card1" style={{ width: "300px", margin: "20px" }} key={index}>
          <MDBCardImage
            src="https://siradisidigital.com/upload/yemek-fotografi-nasil-cekilir-ankara-dijital-ajans-siradisi-digital-5.jpg"
            position="top"
            alt="..."
            style={{ height: "200px", objectFit: "cover" }}
          />
          <MDBCardBody style={{ backgroundColor: "#E89F71" }}>
            <MDBCardTitle className="bodyText" style={{ color: "#D57149", fontSize: "1.5rem" }}>
              {product.product_name}
            </MDBCardTitle>
            <MDBCardText className="bodyText" style={{ marginBottom: "1rem" }}>
              {product.information}
            </MDBCardText>
            <MDBCardText className="companyText" style={{ color: "#AA4A30", fontSize: "1rem" }}>
              {user[index]?.fullname}
            </MDBCardText>
            <MDBBtn
              href="#"
              onClick={() => handleClick(product)}
              className="ripple1"
              disabled={cart.length > 0}
             style={{
                backgroundColor: "#AA4A30",
                marginTop: "1rem",
                boxShadow: "none",
                border: "none",
                width: "200px", // Adjust the width as needed
                height: "50px", // Adjust the height as needed
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Add to Cart
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>
  </section>
  );
};


export default Amazon;