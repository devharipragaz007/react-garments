import  { SHOWALERT, HIDEALERT, NAVURL, INITIATECOMMON, REQUESTCURRENTSTATE } from '../actionTypes'



export default function common (state = [], action){
    switch (action.type) {
      case SHOWALERT:
        return {
          ...state,
          alert : action.text,
          status : action.status
      }
      case REQUESTCURRENTSTATE:
        return state;
      case HIDEALERT:
        return {
          ...state,
          alert : null,
          status : null
      }
      case NAVURL:
        const history = state;
        history.push(action.url)
        return state
      case INITIATECOMMON:
        return action.data
      default:
        return state
    }
  }
  