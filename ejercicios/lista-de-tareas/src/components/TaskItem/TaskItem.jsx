import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TaskItemWrapper = styled.li`
  list-style: none;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TaskText = styled.span`
  text-transform: capitalize;
  text: center;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.completed ? "grey" : "rgb(1, 0, 65)")};
  text-decoration: ${(props) =>
    props.completed ? "line-through rgb(1, 0, 65) 2px" : "none"};
  font-weight: 500;
`;

const TaskButton = styled.button`
  border: none;
`;

const TaskItem = ({ task, handleComplete, handleDelete }) => {
  const [taskComplete, setTaskComplete] = useState(false);

  const handleStyleText = () => {
    setTaskComplete(!taskComplete);
  };

  return (
    <TaskItemWrapper className="list-group-item d-flex justify-content-between align-items-center shadow-sm mx-3">
      <TaskText completed={taskComplete} onClick={handleStyleText}>
        {task.name}
      </TaskText>

      <div>
        <TaskButton
          onClick={handleComplete}
          className={
            taskComplete
              ? "btn  btn-success p-1 m-1"
              : "btn btn-secondary p-1 m-1 text-light"
          }
        >
          <iconify-icon
            icon={taskComplete ? "material-symbols:check" : "iconoir:cancel"}
          ></iconify-icon>
        </TaskButton>

        <TaskButton
          onClick={() => console.log("Editar tarea")}
          className="btn btn-warning p-1 m-1"
        >
          <iconify-icon icon="grommet-icons:edit"></iconify-icon>
        </TaskButton>

        <TaskButton onClick={handleDelete} className="btn btn-danger p-1 m-1">
          <iconify-icon icon="material-symbols:delete"></iconify-icon>
        </TaskButton>
      </div>
    </TaskItemWrapper>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TaskItem;
