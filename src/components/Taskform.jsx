import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/Context'

const Taskform = () => {
    const {createTask} = useContext(GlobalContext)

    const [todo, setTodo] = useState('')

    const handlechange = (e) => {
       setTodo(e.target.value)
    } 
    
    const handlesubmit = (e) => { 
        e.preventDefault();
        createTask(todo)
        setTodo('')
     };

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder='write a task' onChange={handlechange} value={todo} autoFocus/>
            <button>Guardar</button>
        </form>
    </div>
  )
}

export default Taskform