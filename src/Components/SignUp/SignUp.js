import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='login-title'>Sign up</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">confirm password</label>
                        <input type="password" name="confirm-password" id="confirm-password" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>Already have an account?<Link  className='signup-link' to='/login'>login</Link></p>
                <button className='google-button'>sign with google</button>
            </div>
        </div>
    );
};

export default Login;