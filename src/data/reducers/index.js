import {combineReducers} from 'redux';
import elements from './drawingReducer';
import application from "./applicationReducer";
import style from "./styleReducer";

const rootReducer = combineReducers({
    elements,
    application,
    style,
});

export default rootReducer;