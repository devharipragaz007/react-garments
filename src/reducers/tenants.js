import { SAVE_TENANT } from "../actionTypes"


const initialState = {
}

export default function Tenants(state=initialState, action){
    switch (action.type)
    {
        case SAVE_TENANT : {
            const data = action.payload;
            return {
                ...state,
                data : data
            }
        }
        default:
            return state
    }

}