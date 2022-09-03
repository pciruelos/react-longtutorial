import React,{useContext} from 'react'
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import {GlobalContext} from './context/Context'

function App() {
  const {tasks} = useContext(GlobalContext)

  if (tasks.length === 0) {
    return <h1>no hay tareas</h1>;
  }

  return (
    <div>
      <Tasklist/>
      <Taskform/>
    </div>
  )
}

export default App