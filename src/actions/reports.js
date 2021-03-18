import { SET_REPORT_DETAILS } from "../actionTypes"


export const setReportData = (data) =>{
    return (dispatch) => {
        dispatch({
            type : SET_REPORT_DETAILS,
            payload : data
        })
    }
}