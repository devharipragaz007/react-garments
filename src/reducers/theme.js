const { TOGGLE_THEME } = require("../actionTypes");

const initialState = {
    theme: 'light'
}

export default function Example(state=initialState, action){
    switch (action.type)
    {
        case TOGGLE_THEME : {
            return {
                ...state,
                theme : state.theme === "light" ? "dark" : 'light'
            }
        }
        
        default:
            return state
    }

}