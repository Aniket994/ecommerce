import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import AdminApp from './adminApp';


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
if( localStorage.getItem("vid") ==null )
{
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
}else{
  root.render(
    <React.StrictMode>
      <AdminApp />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
