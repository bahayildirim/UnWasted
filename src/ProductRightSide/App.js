import Product from "./Product";
import "./index.css";
import products from "./products.json";
import { useEffect, useState } from "react";

function App() {
  const [prod, setProduct] = useState();

  useEffect(() => {
    console.log(prod);
  }, [prod]);

  return (
    <>
      <div className="productContainer">
        <div className="productBoxs">
          {products.map((product) => {
            if (product.amount != 0) {
              return (
                <Product
                  key={product.id}
                  product={product}
                  setProduct={setProduct}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default App;
