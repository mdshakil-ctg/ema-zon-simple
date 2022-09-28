import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Order Summary</h3>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price:</p>
                <p>Total Shipping Charge</p>
                <p><small>Tax:</small></p>
                <p>Grand Total</p>
                <button>Clear Cart</button>
                <button>Review Order</button>
        </div>
    );
};

export default Cart;