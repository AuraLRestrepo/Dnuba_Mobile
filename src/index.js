import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import Hello_Word from './components/hello_word';



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
const container = document.getElementById('root');

ReactDOM.render(<Hello_Word/>,container);
reportWebVitals();
