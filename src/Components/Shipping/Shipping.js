/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
    // eslint-disable-next-line no-unused-vars
    
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [user] = useAuthState(auth)


    // const navigate = useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
    }

    

    return (
        <div className='form-container'>
            <div>
                <h2 className='login-title'>shipping information</h2>
                <form onSubmit={handleForm}>
                    <div className="input-group">
                        <label htmlFor="name">Your name</label>
                        <input  onBlur={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder='enter you name' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your email</label>
                        <input  value={user?.email} readOnly type="email" name="email" id="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={(e) => setAddress(e.target.value)} type="text" name="address" id="address" placeholder='enter you addrss' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone </label>
                        <input onBlur={(e) => setPhone(e.target.value)} type="text" name="phone" id="phone" placeholder='enter phone number'/>
                    </div>
                    <input className='form-submit' type="submit" value="add shipping" />
                </form>
               
            </div>
        </div>
    );
};

export default Login;