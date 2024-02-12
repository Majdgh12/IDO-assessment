import React from 'react'
import './Task.css'
import { useState } from 'react';



export const Task = ({ taskId, Title, Category, DueDate, Estimate, Importance, Status, editTask,draggable }) => {


  const [editMode, seteditMode] = useState(false);
  const [TaskTitle, setTaskTitle] = useState(Title);
  const [TaskCategory, setTaskCategory] = useState(Category);
  const [TaskDueDate, setTaskDueDate] = useState(DueDate);
  const [TaskEstimate, setTaskEstimate] = useState(Estimate);
  const [TaskImportance, setTaskImportance] = useState(Importance);



  console.log(Category);

  const setEditModeOn = (e) => {


    seteditMode(true);
  }
  const handleTitleChange = (e) => {
    const TitleValue = e.target.value;

    setTaskTitle(TitleValue);


  }
  const handleDueDateChange = (e) => {
    const DueDateValue = e.target.value;

    setTaskDueDate(DueDateValue);


  }

  const handleCategoryChange = (e) => {
    const categoryValue = e.target.value;

    setTaskCategory(categoryValue);


  }
  const handleEstimateChange = (e) => {
    const estimateValue = e.target.value;

    setTaskEstimate(estimateValue);


  }
  const handleImportanceChange = (e) => {
    const importanceValue = e.target.value;

    setTaskImportance(importanceValue);


  }

  const handleSave = (e) => {
    e.stopPropagation();



    editTask({
      taskId: taskId,
      Title: TaskTitle,
      Category: TaskCategory,
      Estimate: TaskEstimate,
      DueDate: TaskDueDate,
      Importance: TaskImportance
    })

    seteditMode(false);
  }

  const doNothing = () => {
  }

  return (
    <div className={`Task ${editMode ? 'edit-mode' : ''}`} onClick={setEditModeOn}>
      <div className="task-field Title"><input type="text" size={40} value={TaskTitle} onChange={editMode ? handleTitleChange : doNothing} name="" id="" /></div>
      <div className="task-field category">
        <p className='category-label'>Category</p>
        <input type="text" value={TaskCategory} onChange={editMode ? handleCategoryChange : doNothing} />
      </div>
      <div className="task-field Due-date">
        <p className='due-date-label'>Due date</p>
        <input type="text" value={TaskDueDate} onChange={editMode ? handleDueDateChange : doNothing} />
      </div>
      <div className="task-field Estimate">
        <p className='Estimate-label'>Estimate</p>
        <input type="text" value={TaskEstimate} onChange={editMode ? handleEstimateChange : doNothing} />
      </div>
      <div className="task-field Importance">
        <p className='Importance-label'>Importance</p>
        {editMode ? (
          <div className='select-wrapper'>
            <select name="" id="" value={TaskImportance} onChange={handleImportanceChange}>
              <option value="high" selected={TaskImportance === "high"} key="" >high</option>
              <option value="medium" selected={TaskImportance === "medium"} key="">medium</option>
              <option value="low" selected={TaskImportance === "low"} key="">low</option>
              <option value="none" selected={TaskImportance === ""} key="">none</option>
            </select>
          </div>
        ) : (
          <div>
            <input type="text" value={TaskImportance} onChange={editMode ? handleImportanceChange : doNothing} />
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
