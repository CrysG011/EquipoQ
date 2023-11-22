import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, handleComplete, handleDelete }) => {
  return (
    <>
      <div className="card-body">
        <ul className="list-group">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleComplete={() => handleComplete(task.id)}
              handleDelete={() => handleDelete(task.id)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskList;
