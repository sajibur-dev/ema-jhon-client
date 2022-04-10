import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='login-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>New To Ema Jhon ?<Link  className='signup-link' to='/signup'>create an account</Link></p>
                <button className='google-button'>sign with google</button>
            </div>
        </div>
    );
};

export default Login;