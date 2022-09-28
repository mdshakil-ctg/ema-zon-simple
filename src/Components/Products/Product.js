import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Products = (props) => {
    
    const {name, price, ratings, seller, img} = props.product;
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>Manufacturer: {seller}</small></p>
            <p className='info'><small>Rating: {ratings}</small></p>
            </div>
            <div>
                <button onClick={() => props.addToCartProduct(props.product)} className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

                </button>
            </div>
        </div>
        
        
    );
};

export default Products;