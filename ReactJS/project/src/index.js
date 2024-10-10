import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';

// Redux store
import store from './components/Redux/Store';
  import { Provider } from 'react-redux';
import App from './App';
  // End of Redux Store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
  
  <BrowserRouter>
   <React.StrictMode>
     <App/>
    <Provider store={store}>
  
   
    </Provider>
    
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
