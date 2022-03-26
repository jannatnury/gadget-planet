import React from 'react';
import './Product.css'

const Product = (props) => {
    // destrucring of products details
    const { name, img, price, brand } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-details">
                <h3>Name:{name}</h3>
                <p>Price: ${price}</p>
                <p>Manufacturer:{brand}</p>
                <button className='product-btn'>
                    <p>Add to cart</p>
                </button>
            </div>
        </div>
    );
}
export default Product;