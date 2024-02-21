import React from 'react'
import './Task.css'
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';



export const Task = ({ id, name, category, dueDate, estimate, importance, status, editTask, draggable }) => {


  const [editMode, seteditMode] = useState(false);
  const [TaskTitle, setTaskTitle] = useState(name);
  const [Taskcategory, setTaskcategory] = useState(category);
  const [TaskdueDate, setTaskdueDate] = useState(dueDate);
  const [Taskestimate, setTaskestimate] = useState(estimate);
  const [Taskimportance, setTaskimportance] = useState(importance);
  const [TaskStatus, setTaskStatus] = useState(status);



  const setEditModeOn = (e) => {
    seteditMode(true);
  }
  const handleTitleChange = (e) => {
    const TitleValue = e.target.value;
    setTaskTitle(TitleValue);
  }
  const handledueDateChange = (e) => {
    const dueDateValue = e.target.value;
    setTaskdueDate(dueDateValue);
  }
  const handlecategoryChange = (e) => {
    const categoryValue = e.target.value;
    setTaskcategory(categoryValue);
  }
  const handleestimateChange = (e) => {
    const estimateValue = e.target.value;
    setTaskestimate(estimateValue);
  }
  const handleimportanceChange = (e) => {
    const importanceValue = e.target.value;
    setTaskimportance(importanceValue);
  }

  const handleSave = async (e) => {
    e.stopPropagation();
    console.log(id)
    console.log(TaskStatus)
    try {
      await axios.put(
        `https://localhost:7231/api/Items/updateTask/${id}`,
        {
          name: TaskTitle,
          category: Taskcategory,
          estimate: Taskestimate,
          dueDate: TaskdueDate,
          importance: Taskimportance,
          status: TaskStatus

        },
        {
          headers: {

            Authorization: Cookies.get('token')
          }
        }
      );
      seteditMode(false);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };


  const doNothing = () => {
  }

  return (
    <div className={`Task ${editMode ? 'edit-mode' : ''}`} onClick={setEditModeOn}>
      <div className="task-field name"><input type="text" size={40} value={TaskTitle} onChange={editMode ? handleTitleChange : doNothing} name="" id="" /></div>
      <div className="task-field category">
        <p className='category-label'>category</p>
        <input type="text" value={Taskcategory} onChange={editMode ? handlecategoryChange : doNothing} />
      </div>
      <div className="task-field Due-date">
        <p className='due-date-label'>Due date</p>
        <input type="text" value={TaskdueDate} onChange={editMode ? handledueDateChange : doNothing} />
      </div>
      <div className="task-field estimate">
        <p className='estimate-label'>estimate</p>
        <input type="text" value={Taskestimate} onChange={editMode ? handleestimateChange : doNothing} />
      </div>
      <div className="task-field importance">
        <p className='importance-label'>importance</p>
        {editMode ? (
          <div className='select-wrapper'>
            <select name="" id="" value={Taskimportance} onChange={handleimportanceChange}>
              <option value="high" selected={Taskimportance === "high"} key="" >high</option>
              <option value="medium" selected={Taskimportance === "medium"} key="">medium</option>
              <option value="low" selected={Taskimportance === "low"} key="">low</option>
              <option value="none" selected={Taskimportance === ""} key="">none</option>
            </select>
          </div>
        ) : (
          <div>
            <input type="text" value={Taskimportance} onChange={editMode ? handleimportanceChange : doNothing} />
          </div>
        )}
      </div>

      {
        editMode && (
          <div className='task-field' >
            <button className='save' onClick={handleSave} >Save</button>
          </div>
        )
      }

    </div>
  )
}
