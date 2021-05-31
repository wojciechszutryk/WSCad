import {SET_DRAWING, SET_SHEET_HEIGHT, SET_SHEET_WIDTH, THEME_TOGGLE} from "../../constants";

export const setDrawing = element => {
    return{
        type: SET_DRAWING,
        payload: element
    }
};

export const themeToggle = () => {
    return{
        type: THEME_TOGGLE,
    }
};

export const setSheetWidth = width => {
    return{
        type: SET_SHEET_WIDTH,
        payload: width
    }
};

export const setSheetHeight = height => {
    return{
        type: SET_SHEET_HEIGHT,
        payload: height
    }
};