import React from 'react'
import {
  BrowserRouter as Router
} from "react-router-dom";

import Navbar from './components/Navbar';
import Routes from './components/Routes';


function App() {

  return (
    <Router>
      <div className="container">
        <h1>Helloi</h1>
        <Navbar />
        <hr/>
        <div className="row">
          <Routes />
        </div>        
      </div>  
    </Router>
  );
}

export default App;
