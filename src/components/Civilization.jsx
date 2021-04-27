import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import CivilizationContext from '../context/Civilization/CivilizationContext';

const Civilization = () => {

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