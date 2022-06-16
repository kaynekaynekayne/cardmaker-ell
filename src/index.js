import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import AuthService from './services/auth_service';
import {firebaseApp} from './services/firebase';

const authService=new AuthService(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService}/>
  </React.StrictMode>
);