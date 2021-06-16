import React from 'react';

//Styles
import './task_in_progress.css';


//Images
import img_user from '../../images/user.svg';
import menu from '../../images/menu.svg';

class TaskInProgress extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cards: [
                {
                  'in_charge': 'OP',
                  'owner': 'QR',
                  'date': '10-06-2021'
              },
              {
                  'in_charge': 'ST',
                  'owner': 'FG',
                  'date': '12-06-2021'
              },
              {
                  'in_charge': 'UV',
                  'owner': 'WX',
                  'date': '14-02-2020'
              },
              {
                  'in_charge': 'YZ',
                  'owner': 'AB',
                  'date': '18-04-2021'
              },
              {
                'in_charge': 'BC',
                'owner': 'DE',
                'date': '18-04-2021'
            },
            {
                'in_charge': 'YZ',
                'owner': 'FG',
                'date': '18-04-2021'
            },
          ]
          }      
  }  
        render(){                
        return(            
            <React.Fragment>  
                { this.state.cards.map(value => (<div className="card-container progress">
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
                            <h3>{value.in_charge}</h3>
                        </div>
                        <div className="user_owner">
                            <h3>{value.owner}</h3>
                        </div>
                    </div>
                    <div className="card-content">                        
                        <h4>T-???</h4>                        
                        <h2>Titulo de la tarea</h2> 
                        <p id="date">{value.date}</p>                         
                    </div>                    
                    <div className="card-content-progressbar">
                        <progress id="task" max="100" value="5"></progress>
                    </div>
                </div>                  
                ))}     
                
             
            </React.Fragment> 
        );
    }

}
export default TaskInProgress;

