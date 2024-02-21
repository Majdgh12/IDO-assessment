import React, { useState } from 'react';
import '../homeContent/homeContent.css';
import { Task } from '../Task/Task';
import showQuote from '../../asset/ShowQuote.png'
import todoIcon from '../../asset/ToDoIcon.svg';
import doingIcon from '../../asset/DoingIcon.svg';
import doneIcon from '../../asset/DoneIcon.svg';
import axios from 'axios';
import Cookies from 'js-cookie';

const HomeContent = ({ Tasks, setTasks }) => {
    const [quoteVisibility, setQuoteVisibility] = useState(true);
    const [hover, setHover] = useState(false);
    const [isQuoteShow, setIsQuoteShow] = useState(false);

    const onHover = () => {
        setHover(true);
    };

    const onBlur = () => {
        setHover(false);
    };

    const editTask = (task) => {
        const temp = Array.from(Tasks);

        temp.forEach((t) => {
            if (t.id === task.id) {
                t.name = task.name;
                t.category = task.category;
                t.estimate = task.estimate;
                t.importance = task.importance;
                t.dueDate = task.dueDate;
            }
        });

        setTasks(temp);
    };

    const handleDragStart = (e, task) => {
        e.dataTransfer.setData('task', JSON.stringify(task));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.target.style.border = '2px dashed #000';
    };

    const handleDragLeave = (e) => {
        e.target.style.border = 'none';
    };

    const handleDrop = (e, status) => {
        e.preventDefault();
        const draggedTask = JSON.parse(e.dataTransfer.getData('task'));
        draggedTask.status = status;
        axios.put(`https://localhost:7231/api/Items/updateTask/${draggedTask.id}`, draggedTask)
            .then((response) => {
                console.log('Task status updated successfully:', response.data);
                setTasks(prevTasks => {
                    const updatedTasks = prevTasks.map(task => {
                        if (task.id === draggedTask.id) {
                            return draggedTask;
                        }
                        return task;
                    });
                    return updatedTasks;
                });
            })
            .catch((error) => {
                console.error('Error updating task status:', error);
            });
    };

    return (
        <div className='homeContent'>
            {quoteVisibility && (
                <div className="quote-container" onMouseOver={onHover} onMouseLeave={onBlur}>
                    <div className='quote'>
                        "Anything that can go wrong, will go wrong!"
                    </div>
                    <div>
                        {hover && (
                            <button onClick={() => { setQuoteVisibility(false); setIsQuoteShow(true); }}>X</button>
                        )}
                    </div>
                </div>
            )}
            {isQuoteShow && (
                <div className='quote-appear' onClick={() => { setQuoteVisibility(true); setIsQuoteShow(false); }}>
                    <img src={showQuote} alt="" onClick={() => { setQuoteVisibility(true); setIsQuoteShow(false); }} />
                </div>
            )}

            <div className='tasks-container'>
                <div className="todo" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={(e) => handleDrop(e, 'toDo')}>
                    <div className="sticky" >
                    <div className="todohead">
                        <img src={todoIcon} alt="" />
                        <h3>ToDo</h3>
                    </div>
                    </div>
                    {Tasks.map((t) => {
                        if (t.status === 'toDo') {
                            return (
                                <div key={t.id} onDragStart={(e) => handleDragStart(e, t)} draggable>
                                    <Task
                                        id={t.id}
                                        name={t.name}
                                        status={t.status}
                                        category={t.category}
                                        dueDate={t.dueDate}
                                        estimate={t.estimate}
                                        importance={t.importance}
                                        editTask={editTask}
                                        key={t.id}
                                    />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="doing" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={(e) => handleDrop(e, 'doing')}>
                    <div className="sticky">
                    <div className="doinghead">
                        <img src={doingIcon} alt="" />
                        <h3>Doing</h3>
                    </div>
                    </div>
                    {Tasks.map((t) => {
                        if (t.status === 'doing') {
                            return (
                                <div key={t.id} onDragStart={(e) => handleDragStart(e, t)} draggable>
                                    <Task
                                        id={t.id}
                                        name={t.name}
                                        status={t.status}
                                        category={t.category}
                                        dueDate={t.dueDate}
                                        estimate={t.estimate}
                                        importance={t.importance}
                                        editTask={editTask}
                                        key={t.id}
                                    />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
                <div className="done" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={(e) => handleDrop(e, 'done')}>
                    <div className="sticky">
                    <div className="donehead">
                        <img src={doneIcon} alt="" />
                        <h3>Done</h3>
                    </div>
                    </div>
                    {Tasks.map((t) => {
                        if (t.status === 'done') {
                            return (
                                <div key={t.id} onDragStart={(e) => handleDragStart(e, t)} draggable>
                                    <Task
                                        id={t.id}
                                        status={t.status}
                                        name={t.name}
                                        category={t.category}
                                        dueDate={t.dueDate}
                                        estimate={t.estimate}
                                        importance={t.importance}
                                        editTask={editTask}
                                        key={t.id}
                                    />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
};
export default HomeContent;
