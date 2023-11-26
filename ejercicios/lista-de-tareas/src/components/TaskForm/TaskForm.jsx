import { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    addTask(newTask);
    setNewTask("");
  };

  return (
    <>
      <div className="card-header">
        <form onSubmit={handleSubmit(onSubmit)} className="input-group mt-3">
          <div className="container row m-auto">
            <div className="col-12 col-md-10 mb-2 mb-md-0">
              <input
                type="text"
                {...register("inputTask", { required: true, minLength: 5 })}
                className="form-control shadow-none"
                placeholder="Ingrese una tarea..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={newTask}
                onChange={handleInputChange}
                autoComplete="off"
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

        <div className="alerts">
          {errors.inputTask?.type === "required" && (
            <div className="form-text text-start mt-0">
              Este campo no puede estar vacío.
            </div>
          )}
          {errors.inputTask?.type === "minLength" && (
            <div className="form-text text-start mt-0">
              La tarea debe tener al menos 5 caracteres.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired, // Espera una función como 'addTask'
};
export default TaskForm;
