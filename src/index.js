import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import UseRefCom from './components/UseRefCom';
import Component1 from './components/lifeCycleMethods/Component1';
import CleanUpFunction from './components/lifeCycleMethods/CleanUpFunction';
import UseReducerComp from './components/hooks/UseReducerComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseRefCom/> */}
    {/* <Component1/> */}
    {/* <CleanUpFunction/> */}
    <UseReducerComp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals