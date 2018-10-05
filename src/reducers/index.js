import { combineReducers } from "redux";
import weatherReducer from './weatherReducer'
import appReducer from './appReducer'

const rootReducer = combineReducers({
    weatherReducer,
    appReducer
})


export default rootReducer