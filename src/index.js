import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { StaticRouter } from 'react-router-dom/server.mjs';

import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

//import './index.css';

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//    </React.StrictMode>
//     ,
//   document.getElementById('root')
// );
