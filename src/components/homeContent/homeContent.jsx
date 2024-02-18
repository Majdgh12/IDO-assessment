import React, { useEffect } from 'react';
import '../homeContent/homeContent.css'
import { useState } from 'react';
import todoIcon from '../../asset/ToDoIcon.svg';
import doingIcon from '../../asset/DoingIcon.svg';
import doneIcon from '../../asset/DoneIcon.svg'
import showQuote from '../../asset/ShowQuote.png'
import { Task } from '../Task/Task';




const HomeContent = ({ Tasks, setTasks }) => {



    // function handleOnDrag(e, widgetType) {
    //     e.dataTransfer.setData("widgetType", widgetType);
    // }

    // function handleOnDrop(e) {
    //     const widgetType = e.dataTransfer.getData("widgetType");
    //     console.log("widgetType", widgetType);
    //     setWidgets([...widgets, widgetType]);
    // }

    // function handleDragOver(e) {
    //     e.preventDefault();
    // }


    const [quoteVisiblity, setquoteVisibility] = useState(true);
    const [hover, sethover] = useState(false);
    const [isQuoteShow, setIsQuoteShow] = useState(false);



    const onHover = () => {
        sethover(true)
    }
    const onblur = () => {
        sethover(false)
    }

    console.log(Tasks);


    const editTask = (task) => {
        const temp = Array.from(Tasks);

        temp.forEach((t) => {
            if (t.taskId === task.taskId) {
                // logic
                t.name = task.name;
                t.category = task.category;
                t.estimate = task.estimate;
                t.importance = task.importance
                t.dueDate = task.dueDate
            }
        })


        setTasks(temp);

    }


    const handleDragStart = (e, taskId) => {
        e.dataTransfer.setData('taskId', taskId);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, status) => {
        const taskId = e.dataTransfer.getData('taskId');
        const updatedTasks = Tasks.map((task) => {
            if (task.taskId === taskId) {
                return { ...task, Status: status };
            }
            return task;
        });
        setTasks(updatedTasks);
    };


    return (
        <div className='homeContent'>
            {
                quoteVisiblity && (
                    <div className="quote-container" onMouseOver={onHover} onMouseLeave={onblur} >
                        <div className='quote'>
                            "Anything that can go wrong, will go wrong!"
                        </div>
                        <div  >
                            {hover && (


                                <button onClick={() => { setquoteVisibility(false); setIsQuoteShow(true) }}>X</button>
                            )

                            }

                        </div>
                    </div>

                )
            }

            {isQuoteShow 
            &&
                <div className='quote-appear'  onClick={() => { setquoteVisibility(true); setIsQuoteShow(false) }}>
                <img src={showQuote} alt="" onClick={() => { setquoteVisibility(true); setIsQuoteShow(false) }} />
            </div>}
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
                                        name={t.name}
                                        category={t.category}
                                        dueDate={t.dueDate}
                                        estimate={t.estimate}
                                        importance={t.importance}
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
                                    name={t.name}
                                    category={t.category}
                                    dueDate={t.dueDate}
                                    estimate={t.estimate}
                                    importance={t.importance}
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
                                    name={t.name}
                                    category={t.category}
                                    dueDate={t.dueDate}
                                    estimate={t.estimate}
                                    importance={t.importance}
                                    editTask={editTask} />
                            );
                        }
                    })
                    }
                </div>
            </div>


        </div>
    );
};
export default HomeContent;