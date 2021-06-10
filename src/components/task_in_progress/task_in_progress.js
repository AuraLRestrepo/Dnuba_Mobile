import React from 'react';

//Styles
import './task_in_progress.css';


//Images
import img_user from '../../images/user.svg';

class TaskInProgress extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="card-container">
                    <div className="card-content-tags">
                        <div className="card-tags">
                        </div>
                        <div className="card-tags-2">
                        </div>
                    </div>
                    <div className="card-content-rigth">
                        <img src={img_user} alt="usuario" className="card-img-user" />
                    </div>
                    <div className="card-content">                        
                        <h4>T-???</h4>                        
                        <h2>Titulo de la tarea</h2> 
                        <input type="date" name="date-tasks" id="date" disabled />                        
                    </div>
                    <div className="card-content-left"></div>
                    {/* <div className="card-content-progressbar">
                        <progress id="task" max="100" value="72"></progress>
                    </div> */}
                </div>
            </React.Fragment>
        );
    }

}
export default TaskInProgress;

