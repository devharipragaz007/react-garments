import {
    SET_REPORT_DETAILS
} from '../actionTypes';

const initialState = {
    reportInfo : {}
}

export default function Masters(state=initialState, action){
    switch (action.type)
    {
        case SET_REPORT_DETAILS : {
            return {
                ...state,
                reportInfo : action.payload
            }
        }
        
        default:
            return state
    }

}