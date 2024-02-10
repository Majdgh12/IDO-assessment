import React from 'react';
import '../homeContent/homeContent.css'
import { useState } from 'react';
import todoIcon from '../../asset/ToDoIcon.svg';
import doingIcon from '../../asset/DoingIcon.svg';
import doneIcon from '../../asset/DoneIcon.svg'
import { Task } from '../Task/Task';


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

const HomeContent = ({ samira, khelasnaMnSamira }) => {

    const [quoteVisibility, setquoteVisibility] = useState(false);

    const [Tasks, setTasks] = useState(tasks);

    console.log(tasks);

    const addTask = (task) => {
        setTasks([...Tasks, task]);
    }

    const editTask = (task) => {
        const temp = Array.from(Tasks);

        temp.forEach((t) => {
            if (t.taskId === task.taskId) {
                // logic
               
                t.Category = task.Category;
            }
        })


        setTasks(temp);

    }

    return (
        <div className='homeContent'>
            {
                quoteVisibility && (
                    <div className="quote-container" >
                        <div>
                            "Anything that can go wrong, will go wrong!"
                        </div>
                        <div onClick={() => setquoteVisibility(false)} >
                            x
                        </div>
                    </div>

                )
            }
            <div className='tasks-container' >
                <div className="todo">
                    <div className="todohead">
                        <img src={todoIcon} alt="" />
                        <h3>ToDo</h3>
                    </div>

                    {
                        Tasks.map((t) => {
                            if (t.Status === "To Do") {
                                return (
                                    <Task
                                    key={t.taskId}
                                    taskId={t.taskId}
                                        Title={t.Title}
                                        Category={t.Category}
                                        DueDate={t.DueDate}
                                        Estimate={t.Estimate}
                                        Importance={t.Importance}  
                                        editTask={editTask} />
                                     
                                );
                            }
                        })
                    }
                  

                </div>

                <div className="doing">
                    <div className="doinghead">
                        <img src={doingIcon} alt="" />
                        <h3>Doing</h3>
                    </div>
                    {Tasks.map((t) => {
                        if (t.Status === "Doing") {
                            return (
                                <Task 
                                key={t.taskId}
                                Title={t.Title}
                                    Category={t.Category}
                                    DueDate={t.DueDate}
                                    Estimate={t.Estimate}
                                    Importance={t.Importance} />
                            );
                        }
                    })
                    }
                </div>
                <div className="done">
                    <div className="donehead">
                        <img src={doneIcon} alt="" />
                        <h3>Done</h3>

                    </div>
                    {Tasks.map((t) => {
                        if (t.Status === "Done") {
                            return (
                                <Task 
                                key={t.taskId}
                                Title={t.Title}
                                    Category={t.Category}
                                    DueDate={t.DueDate}
                                    Estimate={t.Estimate}
                                    Importance={t.Importance} />
                            );
                        }
                    })
                    }
                </div>
            </div>

        </div>
    );
}

export default HomeContent;
