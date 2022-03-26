import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <h1>Choose Your Dream Gadget</h1>
            <div className="shop-container">
                <div className='products-container'>
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <h3>This is order</h3>
                </div>
            </div>
        </div>
    )
};

export default Shop;