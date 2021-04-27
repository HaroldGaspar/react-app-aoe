import { useContext } from "react";
import { Route, Switch } from "react-router";
import CivilizationContext from "../context/Civilization/CivilizationContext";
import Civilization from "./Civilization";
import Contacto from "./Contact";
import Inicio from "./Inicio";
import ListCivilization from "./ListCivilization";

const Routes = () => {
  const {civilization} = useContext(CivilizationContext)//shouldbe inside <CivilizationState>

    return ( 
        <Switch>
        <Route path="/" exact>
          <Inicio />
        </Route>
        <Route path="/contact">
          <Contacto />
        </Route>
        <Route path="/about">

          <ListCivilization/>
          {
            (civilization)?
            <Civilization/>: 
              "..."
          }
        </Route>
      </Switch>
     );
}
 
export default Routes;