import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import TasksProgress from './components/task_in_progress/task_in_progress';


const container = document.getElementById('root');

ReactDOM.render(<TasksProgress/>,container);
reportWebVitals();
