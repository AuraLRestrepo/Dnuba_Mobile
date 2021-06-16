import React from 'react';

import Header from './header/header';
import Task from '../pages/task/task';

function Layout(props){
    return(
        <React.Fragment>
            <Header/>
            <Task/>
            {props.children}
            
        </React.Fragment>
    );
}
export default Layout;