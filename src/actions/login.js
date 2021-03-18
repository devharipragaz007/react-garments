const { SUCCESS_LOGIN, ON_LOGOUT } = require("../actionTypes");

export const successLogin = (loginData) => ({
    type : SUCCESS_LOGIN,
    payload : loginData
})

export const onLogOut = () => ({
    type : ON_LOGOUT
})