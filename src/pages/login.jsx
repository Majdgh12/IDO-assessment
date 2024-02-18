import React, { useState } from 'react';
import logo from '../asset/Logo@2x.png'
import menpic from '../asset/Man.svg'
import womenpic from '../asset/Woman.svg'
import axios from 'axios';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

import './css/login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [authMessage, setAuthMessage] = useState('');

    const navigate = useNavigate(); // Use useNavigate to get the navigate function

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
            setEmailError('Email is required!');
            return;
        }

        if (password.length < 6) {
            setPasswordError('Password is required!');
            return;
        }

        axios
        
        .post(`https://localhost:7231/api/Items/login`, {
                email,
                password,
            })
            .then((response) => {
                console.log(response)
                console.log(response.data.token.result.token)
                Cookies.set(`token`, `Bearer ${response.data.token.result.token}`);
                window.sessionStorage.setItem(`email`, email);
                navigate(`/Home`); // Use the navigate function
            })
            .catch(() => {
                setAuthMessage(`Incorrect Email Or Password!`);
            });
    };

    return (
        <div>
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
                            />
                            {formSubmitted && !email && <p className="error">Email is required!</p>}
                            {emailError && <p className="error">{emailError}</p>}
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {formSubmitted && !password && <p className="error">Password is required!</p>}
                            {passwordError && <p className="error">{passwordError}</p>}
                        </div>
                        <div className="submit">
                            <button className='submit' onClick={handleSubmit}>SIGN IN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
