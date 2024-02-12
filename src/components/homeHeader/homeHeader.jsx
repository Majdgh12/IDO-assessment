import React, { useState } from 'react';
import logo from '../../asset/Logo.png';
import search from '../../asset/Search.png';
import add from '../../asset/Add.png';
import circle from '../../asset/Circle.png';
import profile from '../../asset/Bitmap.png';
import logout from '../../asset/Icon ionic-ios-log-out.png';
import '../homeHeader/homeHeader.css';

const HomeHeader = ({ Tasks, setTasks }) => {
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen);
    };

    const handleAddTask = () => {
        const newTask = {
            taskId: Tasks.length + 1, // Generate a unique taskId
            Title: '',
            Category: '',
            DueDate: '',
            Estimate: '',
            Importance: '',
            Status: 'To Do',
        };
        setTasks([newTask,...Tasks ]); // Add the new task to the Tasks array
    };

    return (
        <div className='HomeHeader'>
            <div className="logo-header">
                <img src={logo} alt="" />
            </div>
            <div className="other">
                <div className="search">
                    <input type="text" name="search" placeholder='What are you looking for?' id="" />
                    <img src={search} alt="" />
                </div>
                <div className="add" onClick={handleAddTask}>
                    <img src={add} alt="" />
                    <img src={circle} alt="" />
                </div>
                <div className="profile" onClick={toggleProfileMenu}>
                    <img src={profile} alt="" />
                </div>
                {isProfileMenuOpen && (
                    <div className="profile-menu">
                        <img src={profile} alt="" />
                        <div>{/* Insert the email */}</div>
                        <p style={{ color: 'white' }}>logout</p>
                        <img src={logout} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeHeader;
