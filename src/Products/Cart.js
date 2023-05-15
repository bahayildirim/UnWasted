import React, { useState } from "react";
import { useEffect } from "react";
import "./cart.css";

const Cart = ({ cart, setCart }) => {
  const [readIngredient, setreadIngredient] = useState(false);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  return (
    <article>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div>
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <img src={item.img} />
                <p>{item.title}</p>
              </div>
              <div className="cartIngredient"></div>
              <div>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
            <br></br>
            <label className="readIngredients">
              <input
                onClick={() => setreadIngredient(!readIngredient)}
                type="checkbox"
              />
              {" I accept that I have read the ingredients."}
            </label>
            <button
              disabled={!readIngredient || cart.length === 0}
              onClick={() => alert("Your order has been received")}
              className="total"
            >
              Confirm Order
            </button>
          </div>
        ))
      ) : (
        <h1 className="empty">Your cart is empty!</h1>
      )}
    </article>
  );
};

export default Cart;
