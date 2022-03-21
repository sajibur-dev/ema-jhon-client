import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import Products from '../Products/Products';
import './Shop.css';


const Shop = () => {
    return (
        <div className='shop-container'>
            <Products/>
            <OrderSummary/>
        </div>
    );
};

export default Shop;