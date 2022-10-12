import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const DATA = [
  { id: "todo-0", name: "Eat", status: 2 },
  { id: "todo-1", name: "Sleep", status: 1 },
  { id: "todo-2", name: "Repeat", status: 0 }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App tasks = {DATA} /> // Remove strict mode as it does it more than once and that's just a debugging tool!
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
