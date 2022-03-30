import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import OrderProduct from '../OrderProduct/OrderProduct';
import OrderSummary from '../OrderSummary/OrderSummary';
import './OrderReview.css';

const OrderReview = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useCart(products);
    console.log(cart);

    const handleProductQuantity = (id) => {
        const newSelectedProduct = cart.find((product) => product.id === id);
        newSelectedProduct.quantity += 1;
        const newCart = newSelectedProduct ? [...cart] : [...cart,newSelectedProduct];
        setCart(newCart)
        addToDb(id,newSelectedProduct.quantity)
    }
    return (
        <div className='shop-container'>
            {
                cart.map((product) => <OrderProduct key={product.id} product={product} handleProductQuantity={handleProductQuantity}/>)
            }
            <OrderSummary cart={cart}/>
        </div>
    );
};

export default OrderReview;