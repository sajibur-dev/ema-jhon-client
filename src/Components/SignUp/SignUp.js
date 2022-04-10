import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    const [error,setError] = useState('');

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user
      ] = useCreateUserWithEmailAndPassword(auth);




    if(user){
        navigate('/shop');
    }

    const handleForm = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError('you don no match');
            return;
        } 

        createUserWithEmailAndPassword(email,password);
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='login-title'>Sign up</h2>
                <form onSubmit={handleForm}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input  onBlur={(e) => setEmail(e.target.value)} type="email" name="email" id="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={(e) => setPassword(e.target.value)} type="password" name="password" id="password" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">confirm password</label>
                        <input onBlur={(e) => setConfirmPassword(e.target.value)} type="password" name="confirmPassword" id="confirm-password" />
                    </div>
                    <p>{error}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>Already have an account?<Link  className='signup-link' to='/login'>login</Link></p>
                <button className='google-button'>sign with google</button>
            </div>
        </div>
    );
};

export default Login;