import React from "react";
import { useEffect, useState } from "react";
import "./index.css";

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

  function deleteItem() {}

  if (product.amount == -1) {
    setProduct(product);
  }

  return (
    <div className="allCard">
      <div class="card">
        <div
          class="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
            class="img-fluid"
          />
          <a href="#!">
            <div
              class="mask"
              styles="background-color: rgba(251, 251, 251, 0.15);"
            ></div>
          </a>
        </div>
        <div class="card-body">
          <h5 class="card-title">{product.product_name}</h5>
          <p class="card-text">{product.information}</p>
          <div className="buttons">
            <button>+</button>
            <p class="card-text">{product.stock}</p>
            <button>-</button>
          </div>
          <div className="configureButton">
            {product.stock === 1 ? (
              <button>Remove</button>
            ) : (
              <button>Reduce 1</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
