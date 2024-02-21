import React, { useState } from 'react';
import logo from '../asset/Logo@2x.png'
import menpic from '../asset/Man.svg'
import womenpic from '../asset/Woman.svg'
import axios from 'axios';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom'; 

import './css/login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [authError, setAuthError] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const navigate = useNavigate(); 

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(value ? '' : 'Email is required');
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordError(value ? '' : 'Password is required');
    };

    const handleSubmit = () => {
        // Set formSubmitted to true to show errors
        setFormSubmitted(true);

        // Reset any previous authentication error message
        setAuthError('');

        if (!email) {
            setEmailError('Email is required');
        }

        if (!password) {
            setPasswordError('Password is required');
        }

        if (!email || !password) {
            return;
        }

        axios
            .post(`https://localhost:7231/api/Items/login`, {
                email,
                password,
            })
            .then((response) => {
                const jsonData =response.config.data
                const dataObject = JSON.parse(jsonData);
                const email = dataObject.email;
                Cookies.set(`email`,email)
                console.log(response)
                console.log(response.data.token.result.token)
                Cookies.set(`token`, `Bearer ${response.data.token.result.token}`);
                navigate(`/Home`); // Use the navigate function
            })
            .catch(() => {
                setAuthError(`Incorrect Email Or Password!`);
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
                            {formSubmitted && emailError && <p className="error">{emailError}</p>}
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            {formSubmitted && passwordError && <p className="error">{passwordError}</p>}
                        </div>
                        <div className="submit">
                            <button className='submit' onClick={handleSubmit}>SIGN IN</button>
                            {formSubmitted && authError && <p className="error">{authError}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
