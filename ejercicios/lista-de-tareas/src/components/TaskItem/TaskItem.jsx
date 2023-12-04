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
  color: ${(props) => (props.completed ? "grey" : "rgb(1, 0, 65)")};
  text-decoration: ${(props) =>
    props.completed ? "line-through rgb(1, 0, 65) 2px" : "none"};
  font-weight: 500;
`;

const TaskButton = styled.button`
  border: none;
`;

const TaskItem = ({ task, handleComplete, handleDelete, updateTask }) => {
  const [taskComplete, setTaskComplete] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.name);

  const handleStyleText = () => {
    setTaskComplete(!taskComplete);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    updateTask(task.id, editedTaskName);
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedTaskName(e.target.value);
  };

  return (
    <TaskItemWrapper>
      <TaskText
        completed={taskComplete}
        onClick={handleStyleText}
        editing={editing}
      >
        {editing ? (
          <input
            type="text"
            value={editedTaskName}
            onChange={handleInputChange}
            autoFocus
          />
        ) : (
          task.name
        )}
      </TaskText>
      <div>
        {editing ? (
          <TaskButton onClick={handleSaveClick} className="btn btn-success m-2">
            <i className="bi bi-check"></i>
          </TaskButton>
        ) : (
          <TaskButton onClick={handleEditClick} className="btn btn-warning m-2">
            <i className="bi bi-pencil"></i>
          </TaskButton>
        )}
        <TaskButton onClick={handleComplete} className="btn btn-success m-2">
          <i className={`bi ${taskComplete ? "bi-check-square" : "bi-square"}`}>
            ✓
          </i>
        </TaskButton>
        <TaskButton
          onClick={() => {
            if (window.confirm("¿Está seguro de eliminar la tarea?")) {
              handleDelete();
            }
          }}
          className="btn btn-danger m-2"
        >
          <i className="bi bi-trash"></i>
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
  updateTask: PropTypes.func.isRequired,
};

export default TaskItem;
