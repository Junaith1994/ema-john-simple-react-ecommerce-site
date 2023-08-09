import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const handleLogOut = () => {
        signOut();
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/home">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ? <button onClick={handleLogOut}>Sign-Out</button>
                    : <Link to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;