import TaskCard from './TaskCard'

const Tasklist = ({data, deleteTask}) => {

  return (
    <div>
      <h1>
        <ul>
           {data.map(t => <TaskCard data={t} key={t.id} deleteTask={deleteTask}/> )}
        </ul>
      </h1>
    </div>
  );
};

export default Tasklist;
