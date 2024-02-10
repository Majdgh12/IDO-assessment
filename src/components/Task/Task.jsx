import React from 'react'
import './Task.css'
import { useState } from 'react';



export const Task = ({ taskId, Title,Category,DueDate,Estimate,Importance,Status , editTask}) => {


  const [editMode, seteditMode] = useState(false);
    const [TaskTitle, setTaskTitle] = useState(Title);
    const [TaskCategory, setTaskCategory] = useState(Category);


    console.log(Category);

    const setEditModeOn = (e) => {
    
     
      seteditMode(true);
    }

  const handleCategoryChange = (e) => {
    const categoryValue = e.target.value;

    setTaskCategory(categoryValue);


  }

  const handleSave = (e) => {
    e.stopPropagation();



    editTask({taskId: taskId, Category: TaskCategory})

    seteditMode(false);
  }

  const doNothing = () =>{
  }

  return (
    <div className='Task' onClick={setEditModeOn}>
      <h3 style={{margin:'0px'}}>{Title}</h3>
      <div className="task-field category">
        <p className='category-label'>Category</p>
        <input type="text" value={TaskCategory} onChange={editMode ? handleCategoryChange : doNothing}  />
      </div>
      <div className="task-field Due-date">
        <p className='due-date-label'>Due date</p>
        <input type="text" value={DueDate}/>
      </div>
      <div className="task-field Estimate">
        <p className='Estimate-label'>Estimate</p>
        <input type="text" value={Estimate} />
      </div>
      <div className="task-field Importance">
        <p className='Importance-label'>Importance</p>
        {
        }
   
      </div>
     
     {
      editMode && (
        <div className='task-field' >
    <button onClick={handleSave} >Save</button>
     </div>
      )
     }

    </div>
  )
}
