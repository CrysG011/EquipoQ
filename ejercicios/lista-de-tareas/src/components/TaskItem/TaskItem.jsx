import { useState } from "react";

const TaskItem = ({ task, handleComplete, handleDelete }) => {
  const [taskComplete, setTaskComplete] = useState(false);

  const handleStyleText = () => {
    setTaskComplete(!taskComplete);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        className={`text-primary fw-normal ${
          taskComplete ? "text-decoration-line-through" : ""
        }`}
      >
        {task.name}
      </span>
      <div
        className="btn-group text-primary"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          className="btn btn-outline-primary ms-4"
          onClick={handleComplete}
        >
          <i
            className={`bi ${taskComplete ? "bi-check-square" : "bi-square"}`}
          ></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-primary ms-4"
          onClick={handleDelete}
        >
          <i className="bi bi-trash"></i>
        </button>
        {/* Agrega otros botones si es necesario */}
      </div>
    </li>
  );
};

export default TaskItem;
