import { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../../Navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.css";
import "./ProductLeftSide.css";
import { MDBContainer, MDBInput, MDBBtn ,MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import ProductCard from "../ProductCard/ProductCard";

function App() {
  const [productName, setProductName] = useState("");
  const [stock, setStock] = useState("");
  const [describe, setDescribe] = useState("");
  const [time, setTime] = useState("");
  const [userid, setuserid] = useState("");
  const [products, setProduct] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/products").then((response) => {
      setProduct(response.data);
    });
  }, []);

  useEffect(() => {
    async function getcookie() {
      let response = await Axios.get("http://localhost:8080/getcookie", {
        withCredentials: true,
      });
      setuserid(response.data);
    }
    getcookie();
  }, []);

  
  function addItem() {
    Axios.post("http://localhost:8080/addproduct", {
      productname: productName,
      stock: stock,
      expirationdate: time,
      information: describe,
      userid: userid,
    }).then((response) => {
      console.log(response);
      window.location.reload();
    });
  }

  return (
    <div>
      <div className="Addproduct">
        <MDBContainer className="container-lg d-flex formHeader">
          <h1 className="formHeaderText">Add Product</h1>
        </MDBContainer>
        <form className="formcss">
          <MDBContainer className="mb-4">
            <MDBInput
              type="text"
              id="form4Example1"
              label="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              style={{ color: "#4F261A" }}
            />
          </MDBContainer>

          <MDBContainer className="mb-4">
            <MDBInput
              type="number"
              id="form4Example2"
              label="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              style={{ color: "#4F261A" }}
            />
          </MDBContainer>

          <MDBContainer className="mb-4">
            <MDBInput
              type="date"
              id="form4Example3"
              label="Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              style={{ color: "#4F261A" }}
            />
          </MDBContainer>

          <MDBContainer className="mb-4">
            <MDBInput
              type="textarea"
              id="form4Example4"
              label="Please describe the product"
              rows="4"
              value={describe}
              onChange={(e) => setDescribe(e.target.value)}
              style={{ color: "#4F261A" }}
            />
          </MDBContainer>

          <MDBBtn
            color="primary"
            className="btn-block mb-4"
            onClick={addItem}
            style={{
              background: "#EDCFA9",
              borderColor: "transparent",
              boxShadow: "none",
            }}
          >
            Add Food
          </MDBBtn>
        </form>
      </div>
    </div>
  );
}

export default App;
