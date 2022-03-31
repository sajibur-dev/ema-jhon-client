import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({
  product,
  handleProductQuantity,
  handleRemoveProduct,
}) => {
  console.log(product);
  const { name, img, price, quantity, shipping } = product;
  return (
    <div className="review-items-container">
      <div className="review-items-img">
        <img src={img} alt="" />
      </div>
      <div className="review-items-details-container">
        <div className="review-items-detils">
          <p className="item-name" title={name}>
            {name.length > 20 ? `${name.slice(0, 20)}...` : name}
          </p>
          <p className="item-price">Price : ${price}</p>
          <p className="item-shipping">shipping : ${shipping}</p>
          <p className="item-quantity">quantity : {quantity}</p>
        </div>
        <div className="review-items-delete">
          <button
            onClick={() => handleRemoveProduct(product)}
            className="delete-button"
          >
            <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
