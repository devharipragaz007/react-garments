import { combineReducers } from 'redux';
import example from "./example";
import theme from "./theme";
import login from "./login";
import tenants from "./tenants";
import common from "./common";
import reports from "./reports";

const appReducer = combineReducers({
    example,
    theme,
    login,
    common,
    tenants,
    reports
  });
   
  export default appReducer;