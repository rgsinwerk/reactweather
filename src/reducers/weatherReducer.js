import {GET_WEATHER} from '../actions/actionTypes'
const defaultState = {
    weatherData:{}
}

export default function weatherReducer(state = defaultState ,action) {
    console.log(action.type)
    switch(action.type) {
        case GET_WEATHER:
            return Object.assign({}, state, {
                weatherData:action.data
            })
        default:
            return state
    }
}