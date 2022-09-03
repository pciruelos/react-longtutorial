import { createContext,useState,useEffect } from "react";
import {taskslist} from '../data/tasks'

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(taskslist);
  }, []);

  const createTask = (todoString) => { 
    setTasks([...tasks,{todo: todoString, id:tasks.length+1}])
   };
  
  const deleteTask = (taskId) => { 
    setTasks(tasks.filter(t => t.id !== taskId))
  
   }; 



  return <GlobalContext.Provider value={{tasks,createTask,deleteTask}}>
            {children}
        </GlobalContext.Provider>;
};
