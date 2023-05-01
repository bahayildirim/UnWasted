import { useState } from "react";
import Axios from "axios";
import Navbar from "../AddProduct/Navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [check, setCheck] = useState(false);
  const [productName, setProductName] = useState();
  const [itemPrice, setİtemPrice] = useState();
  const [stock, setStock] = useState();
  const [describe, setDescribe] = useState();
  const [time, setTime] = useState();

  const addItem = () => {
    Axios.post("http://localhost:8080/addproduct", {
      productname: productName,
      price: itemPrice,
      stock: stock,
      expirationdate: time,
      information: describe,
    }).then((response) => {
      console.log(response);
    });
  };
  const handleCheckboxChange = (event) => {
    setCheck(event.target.checked);
  };

  return (
    <div>
      <Navbar />
      <form>
        <div class="form-outline mb-4">
          <input
            type="text"
            id="form4Example1"
            class="form-control"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <label class="form-label" for="form4Example1">
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
          <label class="form-label" for="form4Example2">
            Stock
          </label>
        </div>

        <div
          class="form-outline mb-4"
          style={{ display: check ? "none" : "block" }}
        >
          <input
            type="number"
            id="form4Example2"
            class="form-control"
            value={itemPrice}
            onChange={(e) => setİtemPrice(e.target.value)}
          />
          <label class="form-label" for="form4Example2">
            price
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
          <label class="form-label" for="form4Example3">
            {" "}
            Please describe the product
          </label>
        </div>

        <button
          type="submit"
          onClick={addItem}
          class="btn btn-primary btn-block mb-4"
        >
          Add Food
        </button>

        <div class="form-check">
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
        </div>
      </form>
    </div>
  );
}

export default App;
