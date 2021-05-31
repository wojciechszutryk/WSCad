import {LINE_ADD, SET_SHEET_HEIGHT, SET_SHEET_WIDTH, THEME_TOGGLE} from "../constants";

const startState = {
    darkTheme: true,
    sheetOffset: Math.min(window.innerWidth*0.2, 200),
    sheetWidth: (window.innerHeight-20)/1.4142857,
    sheetHeight: (window.innerHeight-20),
}

const application = (state= startState, action) => {
    switch (action.type) {
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

        default:
            return state;
    }
}

export default application;