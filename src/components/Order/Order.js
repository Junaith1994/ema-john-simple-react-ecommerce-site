import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import './Order.css';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleDeleteBtn = product => {
        const restProduct = cart.filter(pd => pd.id !== product.id)
        setCart(restProduct);
        removeFromDb(product.id);
    }
    return (
        <div className='review-product-container'>
            <div className='products-container'>
                {
                    cart.map(product => <ReviewProduct
                        key={product.id}
                        product={product}
                        handleDeleteBtn={handleDeleteBtn}
                    ></ReviewProduct>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/inventory'>
                        <button>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;