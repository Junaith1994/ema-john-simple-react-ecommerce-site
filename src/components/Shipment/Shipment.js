import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    // State for fields and error
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [user] = useAuthState(auth);
    // const navigate = useNavigate();

    // Function Handlers
    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handleShipping = event => {
        event.preventDefault();

    }

    return (
        <div className='login-container'>
            <form onSubmit={handleShipping}>
                <h1 className='login-title'>Shipment Information</h1>
                <div className='field-container'>
                    <label className='form-label' htmlFor="name">Your Name</label>
                    <input className='input-field' onBlur={handleNameBlur} type="text" name="" required />
                </div>
                <div className='field-container'>
                    <label className='form-label' htmlFor="email">Your Email</label>
                    <input className='input-field' value={user?.email} readOnly type="email" name="" required />
                </div>
                <div className='field-container'>
                    <label className='form-label' htmlFor="address">Your Address</label>
                    <input className='input-field' onBlur={handleAddressBlur} type="text" name="" required />
                </div>
                <div className='field-container'>
                    <label className='form-label' htmlFor="phone">Your Phone</label>
                    <input className='input-field' onBlur={handlePhoneBlur} type="number" name="" required />
                </div>
                <input className='login-btn' type="submit" value="Add Shipping" />
            </form>
        </div>
    );
};

export default Shipment;