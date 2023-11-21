import React from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';

export default function TaskListComponent() {
    return (
        <>
            <h1 className='text-primary mb-5'>Lista de tareas</h1>

            <main className="container">
                <div className="row">
                    <div className="col-10 offset-1 text-center">
                        <div className="card text-center">
                            <TaskForm />
                            <TaskList />
                            <div className="card-footer text-primary">Tareas: 2</div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}