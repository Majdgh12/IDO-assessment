import React, { useEffect } from 'react';
import '../homeContent/homeContent.css'
import { useState } from 'react';
import todoIcon from '../../asset/ToDoIcon.svg';
import doingIcon from '../../asset/DoingIcon.svg';
import doneIcon from '../../asset/DoneIcon.svg'
import { Task } from '../Task/Task';




const HomeContent = ({ Tasks,setTasks}) => {

    const [quoteVisibility, setquoteVisibility] = useState(false);

    // const [Tasks, setTasks] = useState(tasks);

    console.log(Tasks);
        // useEffect(()=>{
        //     setTasks([{
                // taskId: 7,
                // Title: "",
                // Category: "",
                // DueDate: "",
                // Estimate: "",
                // Importance: "",
                // Status: "To Do",

        //     },...Tasks ]);
        //     khelasnaMnSamira()

        // } ,[samira])
    // const addTask = (task) => {

    //     setTasks([...Tasks, task]);
    // }

    const editTask = (task) => {
        const temp = Array.from(Tasks);

        temp.forEach((t) => {
            if (t.taskId === task.taskId) {
                // logic
                t.Title = task.Title;
                t.Category = task.Category;
                t.Estimate = task.Estimate;
                t.Importance = task.Importance
                t.DueDate = task.DueDate
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
            </div>

        </div>
    );
}

export default HomeContent;
