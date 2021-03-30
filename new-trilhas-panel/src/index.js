import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routers from "./Router/Routers";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Routers />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();