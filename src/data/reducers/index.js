import {combineReducers} from 'redux';
import elements from './drawingReducer';

const rootReducer = combineReducers({
    elements,
});

export default rootReducer;