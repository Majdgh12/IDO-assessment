import React, { useState } from 'react';
import logo from '../asset/Logo.png'
import menpic from '../asset/Man.svg'
import womenpic from '../asset/Woman.svg'

import './css/login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!/\S+@\S+\.\S+/.test(value)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        if (value.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = () => {
        // Set formSubmitted to true to show errors
        setFormSubmitted(true);

        if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email address!');
            return;
        }

        
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long!');
            return;
        }

        
        setEmail('');
        setPassword('');
        setEmailError('');
        setPasswordError('');
    };

    return (
        <div className='login'>
            <div className="loginDesign">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="otherimages">
                    <div className="womenpic"><img src={womenpic} alt="" /></div>
                    <div className="menpic"><img src={menpic} alt="" /></div>
                </div>
            </div>
            <div className="loginForm">
                <div className="container">
                    <h1>Time to Work!</h1>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder={formSubmitted && !email ? 'This field is required' : 'Email'}
                        />
                        {emailError && <p className="error">{emailError}</p>}
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder={formSubmitted && !password ? 'This field is required' : 'Password'}
                        />
                        {passwordError && <p className="error">{passwordError}</p>}
                    </div>
                    <div className="submit">
                        <button className='submit' onClick={handleSubmit}>SIGN IN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;
