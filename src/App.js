import React, {useEffect,useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import './App.css';
import './style/app.css'
import Description from './screens/Description'
import Home from './screens/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Venueslist from './screens/Venueslist';
import Venue from './screens/Venue';

function App() {
  return (
    <Router basename="/">
          <Routes> 
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Venueslist" element={<Venueslist/>}/>
          <Route exact path="/Description" element={<Description/>}/>
          <Route exact path="/Venue" element={<Venue/>}/>
        </Routes>
      </Router>
  );
}

export default App;
