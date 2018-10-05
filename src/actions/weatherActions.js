import {GET_WEATHER} from './actionTypes'
import axios from 'axios'

export function getWeatherData() {
    return dispatch => {
        axios.get("http://localhost:8080/weather").then(res => {
            dispatch(
                {
                    type:GET_WEATHER,
                    data:res.data
                }
            )
        })
    }
    
}