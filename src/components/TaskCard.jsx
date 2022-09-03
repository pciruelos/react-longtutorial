import React,{useContext} from 'react'
import {GlobalContext} from '../context/Context'

const TaskCard = ({data}) => {

  const {deleteTask} = useContext(GlobalContext)

  const handleDelete = () => { 
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