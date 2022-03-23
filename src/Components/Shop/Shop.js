import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import OrderSummary from '../OrderSummary/OrderSummary';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products,setProducts] = useState([]);
    const [carts,setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then((res) => res.json())
        .then((data) => setProducts(data))
    },[]);
    
    useEffect(() => {
        const storedCard = getStoredCart();
        const saveProducts = [];
        for(const id in storedCard){
            const cartProduct = products.find((product) => product.id === id);
            if(cartProduct){
                const quantity = storedCard[id];
                cartProduct.quantity = quantity
                console.log(cartProduct)
                saveProducts.push(cartProduct);
            }
        }
        setCart(saveProducts)
    },[products]);

    const handleAddToCart = (product) => {
        const isExist =  carts.find((cart) => cart.id === product.id);
        const newCart = isExist ?  [...carts] : [...carts,product];
        setCart(newCart);
        const quantity = product.quantity + 1;
        !isExist && addToDb(product.id,quantity)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map((product) => <Product 
                        key={product.id} 
                        product={product}
                        handleAddToCart={handleAddToCart} 
                    />)
                }
            </div>
            <OrderSummary cart={carts}/>
        </div>
    );
};

export default Shop;