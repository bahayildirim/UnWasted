import Product from "./Product";
import "./index.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/products").then((response) => {
      setProduct(response.data);
    });
  }, [products]);

  return (
    <>
      <div className="productContainer">
        <div className="productBoxs">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                setProduct={setProduct}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
