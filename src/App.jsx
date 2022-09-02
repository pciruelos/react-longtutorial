import React,{useState,useEffect} from 'react'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'

import { taskslist } from "./data/tasks";

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(taskslist);
  }, []);

  if (tasks.length === 0) {
    return <h1>no hay tareas</h1>;
  }

const createTask = (todoString) => { 
  setTasks([...tasks,{todo: todoString, id:tasks.length+1}])
 };

const deleteTask = (taskId) => { 
  setTasks(tasks.filter(t => t.id !== taskId))

 }; 

  return (
    <div>
      <Tasklist data={tasks} deleteTask={deleteTask}/>
      <Taskform createTask={createTask}/>
    </div>
  )
}

export default App