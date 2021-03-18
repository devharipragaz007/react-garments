import { SHOWALERT, HIDEALERT, NAVURL, INITIATECOMMON, VERIFYLOGIN, REQUESTCURRENTSTATE } from '../actionTypes';
// import {
//     postRequestWithoutAuth, postRequest
// } from '../globalhelper/helper'
// import { requestCurrentState } from './login_actions';



export function showAlert(msg,status) {
    return (dispatch) => {
        dispatch({
            type: SHOWALERT,
            text : msg,
            status : status
        })
    }
}

export function hideAlert(){
    return (dispatch) => {
        dispatch({
            type : HIDEALERT
        })
    }
}

export function navUrl(url){
    // history.push(url)
    return (dispatch => {
        dispatch({
            type : NAVURL,
            url : url
        })
    })
}

export function initiateCommon(data){
    return (dispatch) => {
        dispatch({
            type : INITIATECOMMON,
            data : data
        })
    }
}

export function requestCurrentState() {
    return (dispatch) => {
        dispatch({
            type: REQUESTCURRENTSTATE
        })
    }
}

export function verifyLogin(){
    return (dispatch) => {
        dispatch(requestCurrentState());
        // return postRequest("user/verifyLogin").then((data) => {
        //     if (data.type === "success") {
        //         console.log(data)
        //     }
        // })
    }
}