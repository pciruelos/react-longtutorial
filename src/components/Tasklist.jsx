import TaskCard from './TaskCard'
import {useContext} from 'react'
import {GlobalContext} from '../context/Context'

const Tasklist = () => {

  const {tasks} = useContext(GlobalContext)

  return (
    <div>
      <h1>
        <ul>
           {tasks.map(t => <TaskCard data={t} key={t.id} /> )}
        </ul>
      </h1>
    </div>
  );
};

export default Tasklist;
