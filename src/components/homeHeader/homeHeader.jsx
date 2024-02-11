import React from 'react';
import logo from '../../asset/Logo.png'
import search from "../../asset/Search.png"
import add from "../../asset/Add.png"
import circle from '../../asset/Circle.png'
import profile from '../../asset/Bitmap.png'
import logout from '../../asset/Icon ionic-ios-log-out.png'


import { useState } from 'react';
import { useEffect } from 'react';
import '../homeHeader/homeHeader.css'




const HomeHeader = ({ tasks, setTasks }) => {

    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen);
    };
//  console.log(tasks)
//  useEffect(() => {
//     console.log(tasks);
// }, [tasks]);
// const handleAddTask = () => {
//     const newTasks = [...tasks, {
//         taskId: tasks.length + 1, // You can use tasks.length + 1 to auto-increment the taskId
//         Title: "",
//         Category: "",
//         DueDate: "",
//         Estimate: "",
//         Importance: "",
//         Status: "To Do",
//     }];
//     setTasks(newTasks);
// };

    return (
        <div className='HomeHeader'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="other">
                <div className="search">
                    <input type="text" name="search" placeholder='What are you looking for?' id="" />
                    <img src={search} alt="" /></div>
                <div className="add" onClick={
                    () => {
                    
                    const newTasks=[...tasks]
                    newTasks.push({
                        taskId: 7,
                        Title: "",
                        Category: "",
                        DueDate: "",
                        Estimate: "",
                        Importance: "",
                        Status: "To Do",
                    })
                    
                    setTasks(newTasks)
                    // console.log(newTasks)
                    // console.log(tasks)
                    
                }
                        
                
                }
                    >
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
}

export default HomeHeader;
