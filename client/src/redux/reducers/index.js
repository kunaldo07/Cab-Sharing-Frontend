//here in this file we will combine all the reducers together

import {combineReducers} from "redux";
import {rowsReducer} from "./rowsReducer";

const reducers = combineReducers({
    //defining a key
    allRows:rowsReducer,
});

export default reducers;