import React, {useEffect,useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Description from './Description/Description'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename="/">
          <Routes> 
          <Route exact path="/" element={<Description/>}/>
        </Routes>
      </Router>
  );
}

export default App;
