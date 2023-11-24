import { useState } from "react";
import PropTypes from "prop-types";

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
          <div className="container row">
            <div className="col-12 col-md-10 mb-2 mb-md-0">
              <input
                type="text"
                className="form-control shadow-none"
                placeholder="Ingrese una tarea..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={newTask}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-5 col-md-2">
              <button
                className="btn btn-primary"
                type="submit"
                id="button-addon2"
              >
                Agregar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired, // Espera una función como 'addTask'
};
export default TaskForm;
