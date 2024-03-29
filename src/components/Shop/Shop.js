import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);
  // console.log(cart);

  // Loading local Storage shopping-cart and adding to UI
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products])

  // Adding product to the Cart
  const addToCart = selectedProduct => {
    // console.log(selectedProduct);
    let newCart = [];
    const existProduct = cart.find(product => product.id === selectedProduct.id);
    if (!existProduct) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct]
    }
    else {
      const restProducts = cart.filter(product => product.id !== selectedProduct.id);
      existProduct.quantity = existProduct.quantity + 1;
      newCart = [...restProducts, existProduct];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
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
      <div className='cart-container'>
        <Cart cart={cart}>
          <Link to='/order'>
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;