import React, { useContext } from "react";
import  CivilizationContext  from "../context/Civilization/CivilizationContext";

const ListCivilization = () => {

    const {getCivilizations, getCivilization, civilizations } = useContext(CivilizationContext)

    React.useEffect(()=>{
        getCivilizations()
    },[])
    return ( 
        <div className="col-lg-6 bg-light">
            <ul className="list-group ">
            {
                civilizations.map(item =>(                    
                    <li key={item.id} className="list-group-item list-group-item-action"
                    onPointerOver={()=> getCivilization(item.id)}>
                         {item.name} - {item.expansion}
                    </li>
                    ))
            }
            </ul>
        </div>
     );
}
 
export default ListCivilization;