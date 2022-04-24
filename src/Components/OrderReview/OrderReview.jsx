import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { addToDb, removeFromDb } from "../../utilities/fakedb";
import OrderSummary from "../OrderSummary/OrderSummary";
import OrderProduct from "../ReviewItem/ReviewItem";
import "./OrderReview.css";

const OrderReview = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  console.log(cart);

  const handleProductQuantity = (id) => {
    const newSelectedProduct = cart.find((product) => product._id === id);
    newSelectedProduct.quantity += 1;
    const newCart = newSelectedProduct
      ? [...cart]
      : [...cart, newSelectedProduct];
    setCart(newCart);
    addToDb(id, newSelectedProduct.quantity);
  };

  const handleRemoveProduct = (removedProduct) => {
    console.log(removedProduct);
    const rest = cart.filter((product) => product._id !== removedProduct._id);
    setCart(rest);
    removeFromDb(removedProduct._id)
  };
  return (
    <div className="shop-container">
      <div className="order-review-container">
        {cart.map((product) => (
          <OrderProduct
            key={product._id}
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
