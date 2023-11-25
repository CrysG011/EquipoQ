import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TaskItemWrapper = styled.li`
  /* Estilos para el contenedor li */
  list-style: none;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TaskText = styled.span`
  /* Estilos para el texto de la tarea */
  text-transform: uppercase;
  text: center;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.completed ? "orange " : "white")};
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
    <TaskItemWrapper>
      <TaskText completed={taskComplete} onClick={handleStyleText}>
        {task.name}
      </TaskText>
      <div>
        <TaskButton onClick={handleComplete} className="btn btn-success m-2">
          <i className={`bi ${taskComplete ? "bi-check-square" : "bi-square"}`}>
            ✓
          </i>
        </TaskButton>
        <TaskButton onClick={handleDelete} className="btn btn-danger ">
          <i>X</i>
        </TaskButton>
        {/* Agreguen otros botones si es necesario */}
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
