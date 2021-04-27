import {GET_CIVILIZATIONS, GET_ONE_CIVILIZATION} from '../types'

export default (state, action) => {
    const {payload, type} = action

    switch(type) {
        case GET_CIVILIZATIONS:
            return{
                ...state,
                civilizations: payload
            }
        case GET_ONE_CIVILIZATION:
            return{
                ...state,
                civilization: payload
            }
    }
}