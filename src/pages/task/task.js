import React from 'react';
import { Link } from 'react-router-dom';

import TasksProgress from '../../components/task_in_progress/task_in_progress';
// import TasksPending from '../../components/task_pending/task_pending';
// import TasksFinish from '../../components/task_finish/task_finish';

import './task.css';

class Task extends React.Component{
    render(){

        return(
           <React.Fragment>
                <div className="submenu">
                <div className="submenu-content">
                    <ul className="option-task">
                        <li className="type-task pending"><Link to="/">Pendientes</Link></li>
                        <li className="type-task in-progress"><Link to="/">En proceso</Link></li>
                        <li className="type-task finish"><Link to="/">Finalizadas</Link></li>
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
