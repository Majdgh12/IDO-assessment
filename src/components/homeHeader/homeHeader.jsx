import React, { useState } from 'react';
import logo from '../../asset/Logo.png';
import search from '../../asset/Search.png';
import add from '../../asset/Add.png';
import circle from '../../asset/Circle.png';
import profile from '../../asset/Bitmap.png';
import logout from '../../asset/Icon ionic-ios-log-out.png';
import '../homeHeader/homeHeader.css';
import { Link } from 'react-router-dom';

const HomeHeader = ({ Tasks, setTasks }) => {
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

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
        setTasks([newTask, ...Tasks]); // Add the new task to the Tasks array
    };
    const [originalTasks, setOriginalTasks] = useState(Tasks);

const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === '') {
        // If the query is empty, show all tasks
        setTasks(originalTasks);
    } else {
        // If the query is not empty, filter the tasks based on the query
        const filteredTasks = originalTasks.filter((task) =>
            (task.Title && task.Title.toLowerCase().includes(query)) ||
            (task.Category && task.Category.toLowerCase().includes(query)) ||
            (task.DueDate && task.DueDate.toLowerCase().includes(query)) ||
            (task.Estimate && task.Estimate.toLowerCase().includes(query)) ||
            (task.Importance && task.Importance.toLowerCase().includes(query))
        );
        setTasks(filteredTasks);
    }
};
    



    return (
        <div className='HomeHeader'>
            <div className="logo-header">
                <img src={logo} alt="" />
            </div>
            <div className="other">
                <div className="search">
                    <input type="text" name="search" placeholder='What are you looking for?' onChange={handleSearch} />
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
                        <div className='logout'>
                        <p style={{ color: 'white' }}>logout</p>
                       <Link to="/"> <img src={logout}  alt="" /></Link></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeHeader;
