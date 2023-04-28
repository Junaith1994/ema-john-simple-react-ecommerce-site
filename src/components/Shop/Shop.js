import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    // Adding product to the Cart
    const addToCart = product => {
      // console.log(product);
      const newCart = [...cart, product];
      setCart(newCart);
    }

    return (
        <div className='shop'>
          <div className='products'>
            {
              products.map(product => <Product 
                key={product.id}
                product={product}
                addToCart={addToCart}
                ></Product>)
            }
          </div>
          <div className=''>
            <h2>Order Summary</h2>  
            <p>Selected Items: {cart.length}</p>
          </div>  
        </div>
    );
};

export default Shop;