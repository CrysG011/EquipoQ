import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <>
      <div className="card-header">
        <form onSubmit={handleSubmit} className="input-group mb-3 mt-3">
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="Ingrese una tarea..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={newTask}
            onChange={handleInputChange}
          />
          <button
            className="btn btn-outline-primary "
            type="submit"
            id="button-addon2"
          >
            Agregar tarea
          </button>
        </form>
      </div>
    </>
  );
};
export default TaskForm;
