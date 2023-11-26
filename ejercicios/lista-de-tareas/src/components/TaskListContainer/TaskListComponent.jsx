import { useReducer, useEffect } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import taskReducer from "../reducer/taskReducer";

const TaskListComponent = () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, dispatch] = useReducer(taskReducer, storedTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Tasks updated:", tasks);
  }, [tasks]);

  const handleComplete = (taskId) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: taskId });
  };

  const handleDelete = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  const addTask = (taskName) => {
    const newTask = {
      id: new Date().getTime(),
      name: taskName,
      completed: false,
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  return (
    <>
      <main className="container bg-gradient pb-5">
        <h1 className="text-light fw-bold p-3">Lista de tareas</h1>
        <div className="row">
          <div className="col-10 offset-1 text-center">
            <div className="card text-center fw-bold card-body-component">
              <TaskForm addTask={addTask} />
              <TaskList
                tasks={tasks}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
              />
              <div className="card-footer text-white fs-5">
                Tareas: {tasks.length}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TaskListComponent;
