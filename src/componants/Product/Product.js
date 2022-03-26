import React from 'react';
import './Product.css'

const Product = (props) => {
    const {id,name,img,price}=props.product;
    return (
        <div>
            <img src={img} alt="" />
            <h3>This is product</h3>
        </div>
    );
}
export default Product;