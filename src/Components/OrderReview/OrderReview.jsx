import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { addToDb, removeFromDb } from "../../utilities/fakedb";
import OrderSummary from "../OrderSummary/OrderSummary";
import OrderProduct from "../ReviewItem/ReviewItem";
import "./OrderReview.css";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  console.log(cart);

  const handleProductQuantity = (id) => {
    const newSelectedProduct = cart.find((product) => product.id === id);
    newSelectedProduct.quantity += 1;
    const newCart = newSelectedProduct
      ? [...cart]
      : [...cart, newSelectedProduct];
    setCart(newCart);
    addToDb(id, newSelectedProduct.quantity);
  };

  const handleRemoveProduct = (removedProduct) => {
    console.log(removedProduct);
    const rest = cart.filter((product) => product.id !== removedProduct.id);
    setCart(rest);
    removeFromDb(removedProduct.id)
  };
  return (
    <div className="shop-container">
      <div className="order-review-container">
        {cart.map((product) => (
          <OrderProduct
            key={product.id}
            product={product}
            handleProductQuantity={handleProductQuantity}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
      </div>
      <OrderSummary cart={cart}>
        <Link to='/shipping'>
          <button>shipping process</button>
        </Link>
      </OrderSummary>
    </div>
  );
};

export default OrderReview;
