import React from 'react';
import './ReviewProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewProduct = (props) => {
    const {handleDeleteBtn, product} = props;
    const { img, name, quantity, price, shipping } = product;
    return (
        <div className='product-container'>
            <div className="img-container">
                <img src={img} alt="" />
            </div>
            <div className="product-details-container">
                <div className="product-details">
                    <p className='product-name' title={name}>{name.length > 20 ? name.slice(0, 20)+'...' : name}</p>
                    <p>Price: {price}</p>
                    <p>Qty: {quantity}</p>
                    <p>Shipping Charge: ${shipping}</p>
                </div>
                <div onClick={() => handleDeleteBtn(product)} className="delete-container">
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
};

export default ReviewProduct;