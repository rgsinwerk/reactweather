import {TOGGLE_DETAILS} from './actionTypes'

export function toggleDetails() {
    console.log("toggle")
    return dispatch => {
            dispatch(
                {
                    type:TOGGLE_DETAILS
                }
            )
    }
    
}