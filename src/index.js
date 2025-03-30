import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter  } from 'react-router-dom';
import Authorization from './Components/Authorization';
import { Search } from './Components/Search';
import { Header } from './Components/Header';
import { ResultSearch } from './Components/ResultSearch';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <App/>
      </BrowserRouter>
   </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//AIzaSyAIDhQZwvq8pHXi3p8gZiijURh4ucS0vic - Api key for Youtube API
