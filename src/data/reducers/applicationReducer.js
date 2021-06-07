import {
    SET_DRAWING,
    SET_SHEET_HEIGHT, SET_SHEET_OFFSET_X,
    SET_SHEET_OFFSET_Y,
    SET_SHEET_WIDTH,
    THEME_TOGGLE,
    TOGGLE_INDICATOR,
    TOGGLE_ORIENTATION
} from "../constants";

const startState = {
    drawing: '',
    darkTheme: true,
    indicator: true,
    sheetOffsetX: (window.innerWidth-(window.innerHeight-20)/1.4142857)/2,
    sheetOffsetY: 10,
    sheetWidth: (window.innerHeight-20)/1.4142857,
    sheetHeight: (window.innerHeight-20),
    sheetVertical: true,
}

const application = (state= startState, action) => {
    switch (action.type) {
        case SET_DRAWING:
            return {
                ...state,
                drawing: action.payload,
            }

        case THEME_TOGGLE:
            return {
                ...state,
                darkTheme: !state.darkTheme
            }

        case SET_SHEET_WIDTH:
            return {
                ...state,
                sheetWidth: action.payload,
            }

        case SET_SHEET_HEIGHT:
            return {
                ...state,
                sheetHeight: action.payload,
            }

        case SET_SHEET_OFFSET_Y:
            return {
                ...state,
                sheetOffsetY: action.payload,
            }

        case SET_SHEET_OFFSET_X:
            return {
                ...state,
                sheetOffsetX: action.payload,
            }

        case TOGGLE_INDICATOR:
            return {
                ...state,
                indicator: action.payload,
            }

        case TOGGLE_ORIENTATION:
            return {
                ...state,
                sheetVertical: !state.sheetVertical,
            }

        default:
            return state;
    }
}

export default application;