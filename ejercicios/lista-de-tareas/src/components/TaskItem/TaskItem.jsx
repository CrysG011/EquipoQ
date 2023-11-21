import { useState } from "react";

export default function TaskItem() {
  const [taskComplete, setTaskComplete] = useState(false);

  const handleStyleText = () => {
    setTaskComplete(!taskComplete);
  };

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span
          className={
            taskComplete
              ? "text-primary fw-normal text-decoration-line-through"
              : "text-primary fw-normal text-decoration-normal"
          }
        >
          Tarea a realizar 1
        </span>
        <div
          className="btn-group text-primary"
          role="group"
          aria-label="Basic outlined example"
        >
          <iconify-icon className="ms-4" icon="mi:edit" />
          <iconify-icon className="ms-4" icon="material-symbols:delete" />
          <iconify-icon
            onClick={handleStyleText}
            className="ms-4"
            icon={
              taskComplete
                ? "mdi:checkbox-outline"
                : "material-symbols:check-box-outline-blank-sharp"
            }
          />
        </div>
      </li>
    </>
  );
}
