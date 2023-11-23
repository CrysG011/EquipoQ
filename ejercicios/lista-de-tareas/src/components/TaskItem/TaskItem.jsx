import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TaskItemWrapper = styled.li`
  /* Estilos para el contenedor li */
  list-style: none;
  /* Añadan más estilos si quieren */
`;

const TaskText = styled.span`
  /* Estilos para el texto de la tarea */
  color: ${(props) => (props.completed ? "gray" : "blue")};
  /* Añadan más estilos si quieren */
`;

const TaskButton = styled.button`
  /* Estilos para los botones */
  background-color: white;
  border: 1px solid blue;
  /* Añadan más estilos si quieren */
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
        <TaskButton onClick={handleComplete}>
          <i
            className={`bi ${taskComplete ? "bi-check-square" : "bi-square"}`}
          ></i>
        </TaskButton>
        <TaskButton onClick={handleDelete}>
          <i className="bi bi-trash"></i>
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
