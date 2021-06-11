import React from 'react';

import TasksProgress from '../task_in_progress/task_in_progress';

import menu from '../../images/menu.svg';
import logo from '../../images/Dnuba_Logo_Solo_Colores_Originales.png';

import './header.css';

class Header extends React.Component{
    render(){

        return(
            <React.Fragment>
                <header className="main">
                    <div className="content">
                        <div className="menu">
                            <img src={menu} alt="menu" className="header-menu" />
                        </div>
                        <div className="logo">
                            <img src={logo} alt="" className="header-logo" />
                        </div>
                    </div>
                </header>
                <div className="content-task">
                    <TasksProgress/>
                </div>
            </React.Fragment>
        );
    }

}
export default Header;
