const { SAVE_TENANT } = require("../actionTypes");

export const saveTenant = (data) => ({
    type : SAVE_TENANT,
    payload : data
})