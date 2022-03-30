import React from "react";

const OrderProduct = ({product ,handleProductQuantity}) => {
    
  return (
    <div key={product.id}>
      <p>{product.name}</p>
      <p>quntity {product.quantity}</p>
      <button onClick={() => handleProductQuantity(product.id)}>+</button>
    </div>
  );
};

export default OrderProduct;
