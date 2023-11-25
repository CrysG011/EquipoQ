import TaskItem from "../TaskItem/TaskItem";
import PropTypes from "prop-types";

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
              className="list-group"
            />
          ))}
        </ul>
      </div>
    </>
  );
};
// Agrego PropTypes para validar las propiedades
TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TaskList;