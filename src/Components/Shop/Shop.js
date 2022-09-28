import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart)

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const addToCartProduct = (product) => {
        const newCart =[...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop'>
            <div className="products-container">
                
                {
                    products.map(product => <Products key={product.id} product={product} addToCartProduct={addToCartProduct}></Products>)
                }
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;