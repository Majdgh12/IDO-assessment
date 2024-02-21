import React, { useState,useEffect } from 'react';
import logo from '../../asset/Logo.png';
import search from '../../asset/Search.png';
import add from '../../asset/Add.png';
import circle from '../../asset/Circle.png';
import profile from '../../asset/Bitmap.png';
import logout from '../../asset/Icon ionic-ios-log-out.png';
import '../homeHeader/homeHeader.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const HomeHeader = ({ Tasks, setTasks,allTasks }) => {
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen);
    };
    console.log(isProfileMenuOpen)

    const handleAddTask = () => {
        axios
            .post(
                'https://localhost:7231/api/Items/tasks',
                {
                    
                    name: '',
                    category: '',
                    dueDate: '',
                    estimate: '',
                    importance: 'high',
                    status: 'toDo',

                },
                {
                    headers: {
                        Authorization: Cookies.get('token'), 
                    },
                }
            )
            .then((response) => {
                setTasks([response.data, ...Tasks]);
            })
            .catch((error) => {
                console.error('Error adding task:', error);
            });
    };
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        if (query.trim() === '') {
            setTasks(allTasks);
        } else {
            setTasks(allTasks.filter((task) =>
            (task.name && task.name.toLowerCase().includes(query)) ||
            (task.category && task.category.toLowerCase().includes(query)) ||
            (task.dueDate && task.dueDate.toLowerCase().includes(query)) ||
            (task.estimate && task.estimate.toLowerCase().includes(query)) ||
            (task.importance && task.importance.toLowerCase().includes(query))
            ));
        }
    };
    return (
        <div className='HomeHeader'>
            <div className="logo-header">
                <img src={logo} alt="" />
            </div>
            <div className="other">
                <div className="search">
                    <input type="text" name="search" placeholder='What are you looking for?' onChange={handleSearch} value={searchQuery}/>
                    <img src={search} alt="" />
                </div>
                <div className="add" onClick={handleAddTask}>
                    <img src={add} alt="" />
                    <img src={circle} alt="" />
                </div>
                <div className="profile" onClick={toggleProfileMenu}>
                    <img src={profile} alt="" />
                </div>
                </div>
                { isProfileMenuOpen && (
                    <div className="profile-menu">
                      <div className='profile-menu-left'> <img src={profile} alt="" /></div> 
                        <div className='profile-menu-right'>
                            <div >{Cookies.get(`email`)}</div>
                            <div className='logout'>
                                <p style={ {color:'white'} }>logout</p>
                                <button style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', cursor: "pointer" }} onClick={() => {
                                    Cookies.remove(`token`)
                                    navigate("/")
                                }}><img src={logout} alt="" /></button>
                            </div>
                        </div>
                    </div>
                )}
            
        </div>
    );
};

export default HomeHeader;
