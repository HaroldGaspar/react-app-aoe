import axios from "axios";
import { useReducer } from "react";
import CivilizationContext from "./CivilizationContext";
import CivilizationReducer from "./CivilizationReducer";

const CivilizationState = (props) => {
    const initialState = {
        civilizations: [],
        civilization: null
    }

    const [state, dispatch] = useReducer(CivilizationReducer, initialState)

    const getCivilizations = async() => {
        const res = await axios.get('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        console.log('getCivilizations: ', res.data.civilizations)
        dispatch({
            type: 'GET_CIVILIZATIONS',
            payload: res.data.civilizations
        })
    }
    
    const getCivilization = async(id) => {
        const res = await axios.get(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
        console.log('getCivilization ',id,": ", res.data)
        dispatch({
            type: 'GET_ONE_CIVILIZATION',
            payload: res.data
        })
    }

    return ( 
        <CivilizationContext.Provider value={{
            civilizations: state.civilizations,
            civilization: state.civilization,
            getCivilizations,
            getCivilization
        }}>
            {props.children}
        </CivilizationContext.Provider>
     );
}
 
export default CivilizationState;