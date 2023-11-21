import TaskItem from "../TaskItem/TaskItem"

export default function TaskList() {
    return (
        <>
            <div className="card-body">
                <ul className="list-group">
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                    <TaskItem />
                </ul>
            </div>
        </>
    )
}