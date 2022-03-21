import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({cart}) => {
    return (
        <div>
            <h1>selected item : {cart.length}</h1>
        </div>
    );
};

export default OrderSummary;