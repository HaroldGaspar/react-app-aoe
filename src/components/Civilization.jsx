import React, { useContext, useState } from 'react'
import { useParams } from "react-router";
import {Link} from 'react-router-dom'
import CivilizationContext from '../context/Civilization/CivilizationContext';

const Civilization = (props) => {
    /*
    //const {id} = useParams()
    const id = props.id
    const[civilization, setcivilization] = useState({})
    React.useEffect(()=>{

        console.log(id);        

        const obtenerDato = async()=>{
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const user = await data.json()
            setcivilization(user)
        }
        obtenerDato()
    },[id])*/

    const {civilization} = useContext(CivilizationContext)

    return ( 
        <div className="col-lg-6 bg-light ">
            <ul>
            {
                <div key={civilization.id} className="">
                    <h3>{civilization.name}</h3>
                    <p>{civilization.team_bonus}</p>
                    
                    <Link to="/about">
                        <button className="btn btn-warning">
                              Volver  
                        </button>                    
                    </Link>
                </div>
            }
            </ul>
        </div>
     );
}
 
export default Civilization;