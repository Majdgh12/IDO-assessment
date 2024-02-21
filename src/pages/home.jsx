import React from 'react';
import HomeHeader from '../components/homeHeader/homeHeader';
import HomeContent from '../components/homeContent/homeContent';
import { useState, useEffect } from 'react'; 
import axios from 'axios';
import Cookies from 'js-cookie';

const Home = () => {
    const [Tasks, setTasks] = useState([]);
    const [allTasks, setallTasks] = useState([]);

    useEffect(() => {
        
        const token = Cookies.get('token');
        if (!token) {
            console.error('Token not found in cookies.');
            return;
        }

        axios.get('https://localhost:7231/api/Items/user/tasks', {
            headers: {
                Authorization: Cookies.get(`token`), 
            },
        })
        .then((response) => {
            console.log(response.data);
            setTasks(response.data);
            setallTasks(response.data)
        })
        .catch((error) => {
            console.error('Error fetching tasks:', error);
        });
    }, []);     
  
    return (
        <div>
            <HomeHeader Tasks={Tasks} setTasks={setTasks}  allTasks={allTasks} />
            <HomeContent Tasks={Tasks} setTasks={setTasks} />
        </div>
    );
}

export default Home;
