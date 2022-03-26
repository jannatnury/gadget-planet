import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Gadget Planet</h2>
            <div className='header-anchor'>
                <a href="/home">Home</a>
                <a href="/products">Products</a>
                <a href="/Order">Order</a>
                <a href="/Cart">Cart</a>
            </div>
        </div>
    );
};

export default Header;