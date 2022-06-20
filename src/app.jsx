import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App({authService, FileInput }) {


  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Login authService={authService}/>}/>
          <Route path="/maker" element={<Maker 
            FileInput={FileInput}
            authService={authService}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
