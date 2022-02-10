// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Router from './router';
// import { BrowserRouter } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//         <Router />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router,Route} from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { async } from 'q';
import {Provider} from 'react-redux'
import store from './view/socket/store'
// import 'bootstrap/dist/css/bootstrap.css'
ReactDOM.render(
    (
         <BrowserRouter>
             <Provider store={store}>
              <App/>
           </Provider>
        </BrowserRouter>
    ),
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
