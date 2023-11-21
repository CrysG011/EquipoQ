export default function TaskForm() {
    return (
        <>
            <div className="card-header">
                <div className="input-group mb-3 mt-3">
                    <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Ingrese una tarea..."
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        id="task"
                    />
                    <button
                        className="btn btn-outline-primary "
                        type="button"
                        id="button-addon2"
                    >
                        Agregar tarea
                    </button>
                </div>
            </div>
        </>
    )
}