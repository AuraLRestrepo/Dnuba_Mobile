import React from 'react';

//Styles
import './task_in_progress.css';


//Images
import img_user from '../../images/user.svg';
import menu from '../../images/menu.svg';

var tags = [];
for (let index = 0; index < 5; index++) {
    tags.push(
        <div className="card-container">
    <div className="card-content-tags">
        <ul>
            <li></li>   
            <li></li> 
            <li></li>                          
        </ul>                        
    </div>
    <div className="card-content-rigth">
        <img src={img_user} alt="usuario" className="card-img-user" />
    </div>
    <div className="card-content-left">
        <img src={menu} alt="menu" className="card-menu" />
       <div className="user_responsable">
            <h3>AB</h3>
        </div>
        <div className="user_owner">
            <h3>CD</h3>
        </div>
    </div>
    <div className="card-content">                        
        <h4>T-???</h4>                        
        <h2>Titulo de la tarea</h2> 
        <input type="date" name="date-tasks" id="date" value="2021-06-10" disabled />                        
    </div>                    
    <div className="card-content-progressbar">
        <progress id="task" max="100" value="5"></progress>
    </div>
</div>
    );
    
}

class TaskInProgress extends React.Component{
        render(){        
        return(            
            <React.Fragment>        
                {tags}
            </React.Fragment> 
        );
    }

}
export default TaskInProgress;

