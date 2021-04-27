import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CivilizationState from './context/Civilization/CivilizationState';

ReactDOM.render(
  <React.StrictMode>
    <CivilizationState>
    <App />
    </CivilizationState>
  </React.StrictMode>,
  document.getElementById('root')
);
 