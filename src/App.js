import React, { useContext, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Civilization from './components/Civilization';
import Contacto from './components/Contact';
import Inicio from './components/Inicio';
import ListCivilization from './components/ListCivilization';
import CivilizationContext from './context/Civilization/CivilizationContext';
import CivilizationState from './context/Civilization/CivilizationState';


function App() {

  const [sidebar, setSidebar]= useState(false)
  const [id, setid] = useState(null)
  const {civilization} = useContext(CivilizationContext)//shouldbe inside <CivilizationState>

  return (
    //<CivilizationState>
    <Router>
      <div className="container">
        <h1>Helloi</h1>

        {/* nav */}
        <nav className="navbar navbar-light navbar-expand-lg">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="btn btn-dark" activeClassName="active">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="btn btn-dark" activeClassName="active">Contacto</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="btn btn-dark" activeClassName="active">Civilizations</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>
        <div className="row">
          <Switch>
            {/* <Route path="/nosotros/:id">
              <Civilization />
            </Route> */}
            <Route path="/" exact>
              <Inicio />
            </Route>
            <Route path="/contact">
              <Contacto />
            </Route>
            <Route path="/about">

              <ListCivilization setSidebar={setSidebar} setid={setid} id={id}/>
              {
                //(sidebar)?
                (civilization)?
                <Civilization id={id}/>: 
                  "..."
              }
            </Route>
          </Switch>
        </div>
        
      </div>  
    </Router>
    //        </CivilizationState>
  );
}

export default App;
