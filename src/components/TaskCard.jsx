import React from 'react'

const TaskCard = ({data, deleteTask}) => {

  const handleDelete = (id) => { 
    deleteTask(data.id)
   };
  return (
    <>
    <li>Task:{data.todo}</li>
    <button onClick={handleDelete}>delete</button>
    </>

  )
}

export default TaskCard