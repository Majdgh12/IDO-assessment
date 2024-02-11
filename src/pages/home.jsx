import React from 'react';
import HomeHeader from '../components/homeHeader/homeHeader';
import HomeContent from '../components/homeContent/homeContent';
import {useState} from 'react';

const Home = () => {
    const tasks = [
        {
            taskId: 1,
            Title: "Prepare the Assay",
            Category: "Education",
            DueDate: "12/12/2022",
            Estimate: "6 hours",
            Importance: "High",
            Status: "To Do",
        },
        {
            taskId: 2,
            Title: "Format the PC",
            Category: "General cleanup",
            DueDate: "12/10/2022",
            Estimate: "3 hours",
            Importance: "Low",
            Status: "To Do",
        }
        ,
        {
            taskId: 3,
            Title: "Translate the resume",
            Category: "Job Opportunity",
            DueDate: "10/10/2022",
            Estimate: "2 hours",
            Importance: "Low",
            Status: "Doing",
        },
        {
            taskId: 4,
            Title: "Fix the power button of the TV",
            Category: "Translate the resume",
            DueDate: "10/10/2022",
            Estimate: "2 hours",
            Importance: "Low",
            Status: "Doing",
        },
        {
            taskId: 5,
            Title: "Prepare the XD design",
            Category: "Final Year Project",
            DueDate: "01/01/2022",
            Estimate: "8 hours",
            Importance: "High",
            Status: "Done",
        },
        {
            taskId: 6,
            Title: "Email the faculty director about the progress",
            Category: "Final Year Project",
            DueDate: null,
            Estimate: "5 minutes",
            Importance: "None",
            Status: "Done",
        }
    ]
    const [Tasks, setTasks] = useState(tasks);

    // const [samira, setsamira] = useState(false);


    // const addSamira = () => {
    //     setsamira(true);
    // }

    // const khelasnaMnSamira = () => {
    //     setsamira(false);
    // }
    return (
        <div>
         <HomeHeader tasks={tasks} setTasks={setTasks} />
        <HomeContent Tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default Home;
