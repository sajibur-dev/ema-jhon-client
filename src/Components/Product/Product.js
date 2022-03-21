import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({product,handleAddToCart}) => {
    const {img,name,seller,price,ratings} = product;
    return (
        <div className='card'>
            <div className='img-card'>
                <img src={img} alt="img" />
            </div>
            <div className='card-description'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price : $ {price}</p>
                <p className='product-seller'> Manufacturer : {seller}</p>
                <p className='product-ratings'>Rating : {ratings}</p>
            </div>
            <button onClick={() =>handleAddToCart(product)} className="card-footer" >
                <p className='btn-bg'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
        </div>
    );
};

export default Product;