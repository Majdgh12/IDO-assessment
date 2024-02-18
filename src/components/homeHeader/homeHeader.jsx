import React, { useState } from 'react';
import logo from '../../asset/Logo.png';
import search from '../../asset/Search.png';
import add from '../../asset/Add.png';
import circle from '../../asset/Circle.png';
import profile from '../../asset/Bitmap.png';
import logout from '../../asset/Icon ionic-ios-log-out.png';
import '../homeHeader/homeHeader.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate}  from 'react-router-dom';

const HomeHeader = ({ Tasks, setTasks }) => {
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen);
    };

    const handleAddTask = () => {
        const newTask = {
            taskId: Tasks.length + 1, // Generate a unique taskId
            name: '',
            category: '',
            dueDate: '',
            estimate: '',
            importance: '',
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
            (task.name && task.name.toLowerCase().includes(query)) ||
            (task.category && task.category.toLowerCase().includes(query)) ||
            (task.dueDate && task.dueDate.toLowerCase().includes(query)) ||
            (task.estimate && task.estimate.toLowerCase().includes(query)) ||
            (task.importance && task.importance.toLowerCase().includes(query))
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
                       <button onClick={()=>{
                        Cookies.remove(`token`)
                        navigate("/")
                       }}><img src={logout} alt="" /></button>
                       </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeHeader;
