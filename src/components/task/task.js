import React from 'react';

import TasksProgress from '../task_in_progress/task_in_progress';

import './task.css';

class Task extends React.Component{
    render(){

        return(
           <React.Fragment>
                <div className="submenu">
                <div className="submenu-content">
                    <ul className="option-task">
                        <li className="type-task pending">Pendientes</li>
                        <li className="type-task in-progress">En proceso</li>
                        <li className="type-task finish">Finalizadas</li>
                    </ul>
                </div>
            </div>
            <div className="contents">
                <TasksProgress/>
            </div>
           </React.Fragment>
        );
    }


}
export default Task;
