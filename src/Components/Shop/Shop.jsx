import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import OrderSummary from '../OrderSummary/OrderSummary';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products,setProducts] = useProducts();
    
    const [cart,setCart] = useState([]);
    useEffect(() => {
        const storedCard = getStoredCart();
        const saveProducts = []; 
        for(const id in storedCard){
            const cartProduct = products.find((product) => product.id === id);
            if(cartProduct){
                const quantity = storedCard[id];
                cartProduct.quantity = quantity;
                saveProducts.push(cartProduct);
            }
        }
        setCart(saveProducts)
    },[products]);



    const handleAddToCart = (product) => {
        product.quantity = 1;
        const isExist =  cart.find((cartProduct) => cartProduct.id === product.id);
        const newCart = isExist ?  [...cart] : [...cart,product];
        setCart(newCart);
        !isExist && addToDb(product.id,product.quantity);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(
                        (product) => <Product 
                            key={product.id} 
                            product={product}
                            handleAddToCart={handleAddToCart} 
                        />
                    )
                }
            </div>
            <OrderSummary cart={cart}>
                <Link to='/review'> 
                    <button>Review order</button>
                </Link>
            </OrderSummary>
        </div>
    );
};

export default Shop;