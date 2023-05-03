import { useState } from "react";
import Axios from "axios";
import Navbar from "../Navbar/Navbar.js";
import "bootstrap/dist/css/bootstrap.css";
import ProductRightSide from "./ProductRightSide/App.js";
import ProductLeftSide from "./ProductLeftSide/ProductLeftSide.js";
import "./AddProduct.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="allBody">
        <ProductLeftSide />
        <div className="deneme">
          <ProductRightSide />
        </div>
      </div>
    </div>
  );
}

export default App;
