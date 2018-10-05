import {TOGGLE_DETAILS} from '../actions/actionTypes'
const defaultState = {
    isDetailModalOpen:false
}

export default function appReducer(state = defaultState ,action) {
    switch(action.type) {
        case TOGGLE_DETAILS:
            return Object.assign({}, state, {
                isDetailModalOpen:!state.isDetailModalOpen
            })
        default:
            return state
    }
}