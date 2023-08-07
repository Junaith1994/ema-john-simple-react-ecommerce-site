import React, { useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    // State for fields and error
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    // Functions Handlers
    const handleEmailBlur = event => {
        setEmail(event.target.value);
        console.log(email);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
        console.log(password);
    }

    const handleConfirmPassBlur = event => {
        setConfirmPass(event.target.value);
    }

    if (user) {
        navigate('/inventory');
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPass) {
            setError("Given Passwords are not same!!")
            return;
        }
        if (password.length < 4) {
            setError("Password should be at least 4 characters!")
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleCreateUser}>
                <h1 className='login-title'>Sign Up</h1>
                <div className='field-container'>
                    <label className='form-label' htmlFor="email">Email</label>
                    <input className='input-field' onBlur={handleEmailBlur} type="email" name="" required />
                </div>
                <div className='field-container'>
                    <label className='form-label' htmlFor="password">Password</label>
                    <input className='input-field' onBlur={handlePasswordBlur} type="password" name="" required />
                </div>
                <div className='field-container'>
                    <label className='form-label' htmlFor="confirm-password">Confirm Password</label>
                    <input className='input-field' onBlur={handleConfirmPassBlur} type="password" name="" required />
                    <p style={{ color: 'red' }}>{error}</p>
                </div>
                <input className='login-btn' type="submit" value="Sign Up" />
                <p className='form-msg'>Already have an account? <Link className='form-link' to='/login'>Login</Link> </p>
            </form>
        </div>
    );
};

export default SignUp;