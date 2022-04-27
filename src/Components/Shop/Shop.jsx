import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import OrderSummary from "../OrderSummary/OrderSummary";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // eslint-disable-next-line no-unused-vars

  const [products,setProducts] = useState([]);
  const [cart, setCart] = useCart();

  const [pageCount, setPageCount] = useState(0);
  const [currentPage,setCurrentPage] = useState(0);
  const [size,setSize] = useState(10);


    useEffect(() => {
        fetch(`https://fathomless-wave-70125.herokuapp.com/product?page=${currentPage}&size=${size}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
    },[currentPage,size]);
    
  useEffect(() => {
    fetch("https://fathomless-wave-70125.herokuapp.com/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, [size]);

  

  const handleAddToCart = (product) => {
    product.quantity = 1;
    const isExist = cart.find((cartProduct) => cartProduct._id === product._id);
    const newCart = isExist ? [...cart] : [...cart, product];
    setCart(newCart);
    !isExist && addToDb(product._id, product.quantity);
  };

  return (
    <div className="shop-container">
      <div>
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="paginationButton">
          {[...Array(pageCount).keys()].map((number) => (
            <button
                className={currentPage === number ? "selected" : ""}
                onClick={() => setCurrentPage(number)}
            >{number + 1}</button>
          ))}
          <select onChange={(e) => setSize(e.target.value)}>
              <option value="5">5</option>
              <option value="10" selected>10</option>
              <option value="15">15</option>
              <option value="20">20</option>
          </select>
        </div>
      </div>


      <OrderSummary cart={cart}>
        <Link to="/review">
          <button>Review order</button>
        </Link>
      </OrderSummary>


    </div>
  );
};

export default Shop;
