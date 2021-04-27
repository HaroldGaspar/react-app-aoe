import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
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
     );
}
 
export default Navbar;