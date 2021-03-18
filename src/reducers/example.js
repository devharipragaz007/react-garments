import {
    CLICKED
} from '../actionTypes';

const initialState = {
    counterTitle: 'Counter',
    clickedCount: 0
}

export default function Example(state=initialState, action){
    switch (action.type)
    {
        case CLICKED : {
            return {
                ...state,
                clickedCount : state.clickedCount + 1
            }
        }
        
        default:
            return state
    }

}