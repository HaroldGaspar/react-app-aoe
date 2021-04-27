import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import  CivilizationContext  from "../context/Civilization/CivilizationContext";

const ListCivilization = (props) => {

    const {getCivilizations, getCivilization, civilizations, civilization } = useContext(CivilizationContext)
    
    //const[civilizations, setcivilizations] = useState([])

    React.useEffect(()=>{
        getCivilizations()
        //obtenerDatos()
    },[])
    /*const obtenerDatos = async()=>{
        const response = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        //.then(d => console.log(d.json()))
        const data = await response.json()
        console.log(data)
        setcivilizations(data.civilizations)
    }
    const handleLink = (id) => {
        props.setSidebar(true)
        props.setid(id)
    }
    const handleLink = (id) => {
        props.setSidebar(true)
        props.setid(id)
    }*/
    return ( 
        <div className="col-lg-6 bg-light">
            <ul className="list-group ">
            {
                civilizations.map(item =>(                    
                    //<Link to={`/nosotros/${item.id}`} key={item.id} className="list-group-item list-group-item-action">
                    <li key={item.id} className="list-group-item list-group-item-action" //onClick={()=>handleLink(item.id)}>
                    onClick={()=> getCivilization(item.id)}>
                         {item.name} - {item.expansion}
                    </li>
                    ))
            }
            </ul>
        </div>
     );
}
 
export default ListCivilization;