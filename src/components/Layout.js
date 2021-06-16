import React from 'react';

import Header from './header/header';
import Task from '../pages/task/task';
import Search from './search/search';

function Layout(props){
    return(
        <React.Fragment>
            <Header/>
            <Task/>
            <Search/>
            {props.children}            
        </React.Fragment>
    );
}
export default Layout;