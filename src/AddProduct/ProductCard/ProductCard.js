import "./ProductCard.css";
import Axios from "axios";

function ProductCard({ product }) {
  function deleteItem() {
    Axios.post("http://localhost:8080/deleteproduct", {
      productid: product.id,
    }).then((response) => {
      console.log(response);
    });

    window.location.reload();
  }

  return (
    <div class="card my-2">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
        class="card-img-top"
        alt="Fissure in Sandstone"
      />
      <div class="card-body">
        <h5 class="card-title">{product.product_name}</h5>
        <p class="card-text">{product.information}</p>
        <button class="btn btn-primary" onClick={deleteItem}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
