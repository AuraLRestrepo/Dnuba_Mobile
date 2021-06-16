import React from 'react';

//Styles
import './task_pending.css';


//Images
import img_user from '../../images/user.svg';
import menu from '../../images/menu.svg';

class TaskPending extends React.Component{
    constructor(props){
          super(props);
          this.state = {
              cards: [
                  {
                    'in_charge': 'AB',
                    'owner': 'CD',
                    'date': '10-06-2021'
                },
                {
                    'in_charge': 'DE',
                    'owner': 'FG',
                    'date': '12-06-2021'
                },
                {
                    'in_charge': 'GH',
                    'owner': 'AR',
                    'date': '14-02-2020'
                },
                {
                    'in_charge': 'KL',
                    'owner': 'MN',
                    'date': '18-04-2021'
                },
            ]
            }      
    }      
    render(){     
             
        return(    
                    
            <React.Fragment>  
                { this.state.cards.map(value => (
                    <div className="card-container pending">
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

                ))
                } 
            </React.Fragment> 
        );
    }

}
export default TaskPending;