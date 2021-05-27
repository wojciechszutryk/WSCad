import {combineReducers} from 'redux';
import elements from './drawingReducer';
import application from "./applicationReducer";

const rootReducer = combineReducers({
    elements,
    application,
});

export default rootReducer;