import React from 'react';
import useProducts from '../../Hooks/useProducts';
import './OrderReview.css';

const OrderReview = () => {
    const [products,setProducts] = useProducts();
    return (
        <div>
            <h1>this is order review {products.length}</h1>
        </div>
    );
};

export default OrderReview;