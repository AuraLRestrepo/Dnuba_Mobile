import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';

import Layout from './Layout';
import Task from '../pages/task/task';
import Pending from './task_pending/task_pending';
import Progress from './task_in_progress/task_in_progress';
import Finish from './task_finish/task_finish';

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Task} /> 
                    <Route exact path="/pending" component={Pending} />   
                    <Route exact path="/progress" component={Progress} /> 
                    <Route exact path="/finish" component={Finish} />                   
                </Switch>
            </Layout>            
        </BrowserRouter>
    );
}

export default App;