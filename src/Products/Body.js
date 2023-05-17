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
    <section
      className="generalBody"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {products.map((product, index) => (
        <div style={{ width: "33.33%" }} key={index}>
          <MDBCard className="card1">
            <MDBCardImage
              src="https://siradisidigital.com/upload/yemek-fotografi-nasil-cekilir-ankara-dijital-ajans-siradisi-digital-5.jpg"
              position="top"
              alt="..."
            />
            <MDBCardBody>
              <MDBCardTitle className="bodyText">
                {product.product_name}
              </MDBCardTitle>
              <MDBCardText className="bodyText">
                {product.information}
              </MDBCardText>
              <MDBCardText className="companyText">
                {user[index]?.fullname}
              </MDBCardText>
              <MDBBtn
                href="#"
                onClick={() => handleClick(product)}
                className="ripple1"
                disabled={cart.length > 0 ? true : false}
              >
                Add Cart
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>
      ))}
    </section>
  );
};

export default Amazon;
