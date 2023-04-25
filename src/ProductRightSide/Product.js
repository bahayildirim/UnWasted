import React from "react";
import { useEffect, useState } from "react";

export default function Product({ product, setProduct }) {
  const [amount, setAmount] = useState(product.amount);

  useEffect(() => {
    console.log(amount);
  }, [amount]);

  function increaseAmount() {
    product.amount += 1;
    setAmount(product.amount);
  }

  function decreaseAmount() {
    product.amount -= 1;
    setAmount(product.amount);
  }

  function decreaseAmountAll() {
    product.amount = 1;
    setAmount(product.amount);
  }

  function deleteItem() {
    
  }

  if (product.amount == -1) {
    setProduct(product);
  }

  return (
    <div>
      <div className="product">
        <div className="countProduct">
          
          <button onClick={increaseAmount}>+</button>
          <b> {amount} </b>
          <button disabled={product.amount == 1} onClick={decreaseAmount}>-</button>
          {
            product.amount == 1 ? (
              <button className="deleteOne" onClick={deleteItem}><label className="deleteOneFontSize">Remove</label></button>
            ) 
            : (
              <button className="deleteOne" onClick={decreaseAmountAll}><label className="deleteOneFontSize">Reduce to 1</label></button>
            )
          }

        </div>
        <img src={product.img} />
        <div className="productsInfo">
          <p>{product.name}</p>
          <p>{product.ingredient}</p>
        </div>
      </div>
    </div>
  );
}

