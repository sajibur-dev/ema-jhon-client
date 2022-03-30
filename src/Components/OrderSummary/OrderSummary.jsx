import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({cart}) => {
    console.log(cart)
    // const totalPrice = cart.reduce((prevPrice,currentPrice) => prevPrice + (currentPrice.price),0);

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total += (product.price * product.quantity);
        console.log(product.quantity)
        shipping += product.shipping
    }

    console.log(total)
    const tex = +((total * 0.1).toFixed(0));
    const grandTotal = total + shipping + tex;
    return (
        <div className='cart-container'>
            <h3>Order Summary</h3>
            <p>Selected Item : {cart.length}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Chrage :${shipping}</p>
            <p>Tex : {tex} </p>
            <h4>Grand Total : ${grandTotal} </h4>
        </div>
    );
};

export default OrderSummary;