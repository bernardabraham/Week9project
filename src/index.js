import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1.js';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
//  ReactDOM.render(<Test />, document.getElementById('root'));
ReactDOM.render(<App1 />, document.getElementById('root'));
//ReactDOM.render(<Results Name = "Steve" Math = "90" Phys = "90" Chem = "95" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();