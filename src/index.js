import React from 'react';
import ReactDOM from 'react-dom';

// component file
import TaskContainer from './components/TaskContainer';

// stylesheet
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <TaskContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
