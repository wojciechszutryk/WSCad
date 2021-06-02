import {SET_COLOR, SET_FILL, SET_FONT_SIZE, SET_LINE_WIDTH, SET_PATTERN} from "../constants";

const startState = {
    fontSize: 16,
    color: '#000000',
    fill: 'transparent',
    pattern: '',
    lineWidth: 1,
}

const style = (state= startState, action) => {
    switch (action.type) {
        case SET_FONT_SIZE:
            return {
                ...state,
                fontSize: action.payload,
            }
        case SET_COLOR:
            return {
                ...state,
                color: action.payload,
            }
        case SET_FILL:
            return {
                ...state,
                fill: action.payload,
            }
        case SET_PATTERN:
            return {
                ...state,
                pattern: action.payload,
            }
        case SET_LINE_WIDTH:
            return {
                ...state,
                lineWidth: action.payload,
            }
        default:
            return state;
    }
}

export default style;