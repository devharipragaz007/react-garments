const { SUCCESS_LOGIN, ON_LOGOUT } = require("../actionTypes");

const initialState = {
    login: false,
    userData : {}
}

export default function Login(state=initialState, action){
    console.log(action.payload)
    switch (action.type)
    {
        case SUCCESS_LOGIN : {
            const MENU_TREE = action.payload.userMenuList;
            delete action.payload.userMenuList;
            return {
                ...state,
                login : true,
                userData : action.payload,
                menuTree : MENU_TREE
            }
        }
        case ON_LOGOUT : {
            return {
                ...state,
                login : false,
                userData : {}
            }
        }
        
        default:
            return state
    }

}