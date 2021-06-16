import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';

import Layout from './Layout';
import Pending from './task_pending/task_pending';
import Progress from './task_in_progress/task_in_progress';
import Finish from './task_finish/task_finish';

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" /> 
                    <Route exact path="/task/pending" component={Pending} />   
                    <Route exact path="/task/progress" component={Progress} /> 
                    <Route exact path="/task/finish" component={Finish} />                   
                </Switch>
            </Layout>            
        </BrowserRouter>
    );
}

export default App;