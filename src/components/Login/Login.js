import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    // State for fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    // Functions handlers
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if(user) {
        navigate('/home');
    }

    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleSignIn}>
                 <h1 className='login-title'>Login</h1>
                <div className='field-container'>
                    <label className='form-label' htmlFor="email">Email</label>
                    <input className='input-field' onBlur={handleEmailBlur} type="email" name="" required/>
                </div>
                <div className='field-container'>
                    <label className='form-label' htmlFor="password">Password</label>
                    <input className='input-field' onBlur={handlePasswordBlur} type="password" name="" required/>
                    {loading && <p>Loading...</p>}
                    <p style={{color: 'red'}}>{error?.message}</p>
                </div>
                <input className='login-btn' type="submit" value="Submit" />
                <p className='form-msg'>New to Ema-john? <Link className='form-link' to='/sign-up'>Create New Account</Link> </p>
            </form>
        </div>
    );
};

export default Login;