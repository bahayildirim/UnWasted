import { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../../Navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.css";
import "./ProductLeftSide.css";

function App() {
  //const [check, setCheck] = useState(false);
  const [productName, setProductName] = useState();
  const [stock, setStock] = useState();
  const [describe, setDescribe] = useState();
  const [time, setTime] = useState();
  const [userid, setuserid] = useState();

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
  // const handleCheckboxChange = (event) => {
  // setCheck(event.target.checked);
  //};

  return (
    <div>
      <div className="Addproduct">
        <div className="container d-flex formHeader">
          <h1 className="formHeaderText">Add Product</h1>
        </div>
        <form className="formcss">
          <div class="form-outline mb-4">
            <input
              type="text"
              id="form4Example1"
              class="form-control"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <label
              style={{ color: "#4F261A" }}
              class="form-label"
              for="form4Example1"
            >
              Product Name
            </label>
          </div>

          <div class="form-outline mb-4">
            <input
              type="number"
              id="form4Example2"
              class="form-control"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
            <label
              style={{ color: "#4F261A" }}
              class="form-label"
              for="form4Example2"
            >
              Stock
            </label>
          </div>

          <div
            class="form-outline mb-4"
            //style={{ display: check ? "none" : "block" }}
          >
            <input
              type="date"
              id="form4Example2"
              class="form-control"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <label
              style={{ color: "#4F261A" }}
              class="form-label"
              for="form4Example2"
            >
              Time
            </label>
          </div>

          <div class="form-outline mb-4">
            <textarea
              class="form-control"
              id="form4Example3"
              rows="4"
              value={describe}
              onChange={(e) => setDescribe(e.target.value)}
            ></textarea>
            <label
              style={{ color: "#4F261A" }}
              class="form-label"
              for="form4Example3"
            >
              {" "}
              Please describe the product
            </label>
          </div>

          <button
            type="submit"
            style={{
              background: "#EDCFA9",
              borderColor: "transparent",
              boxShadow: "none",
            }}
            onClick={addItem}
            class="btn btn-primary btn-block mb-4 "
          >
            Add Food
          </button>

          {/*<div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              checked={check}
              onChange={handleCheckboxChange}
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Free
            </label>
  </div>*/}
        </form>
      </div>
    </div>
  );
}

export default App;
