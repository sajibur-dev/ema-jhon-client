import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({cart}) => {
    const totalPrice = cart.reduce((prevPrice,currentPrice) => prevPrice + currentPrice.price ,0);

    const totalShipping = cart.reduce((prevShipping,currentShipping) => prevShipping + currentShipping.shipping,0);
    const tex = +((totalPrice * 0.1).toFixed(0));
    const grandTotal = totalPrice + totalShipping + tex;
    return (
        <div className='cart-container'>
            <h3>Order Summary</h3>
            <p>Selected Item : {cart.length}</p>
            <p>Total Price : ${totalPrice}</p>
            <p>Total Shipping Chrage :${totalShipping}</p>
            <p>Tex : {tex} </p>
            <h4>Grand Total : ${grandTotal} </h4>
        </div>
    );
};

export default OrderSummary;