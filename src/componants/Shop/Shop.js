import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]=useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const cartHandler = (product) => {
        console.log(product);
        const newcart=[...cart,product];
        setCart(newcart);
    }
    return (
        <div>
            <h1>Choose Your Dream Gadget</h1>
            <div className="shop-container">
                <div className='products-container'>
                    {
                        products.map(product => <Product key={product.id} product={product} cartHandler={cartHandler} ></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <h3>Order Summary</h3>
                    <div className="order-container">
                        <h4>Selected items:{cart.length}</h4>
                        <p>List of selected items:</p>
                        <h4>Total price: $</h4>
                        <button>
                            <p>Choose One</p>
                        </button>
                        <button>
                            <p>Choose Again</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Shop;