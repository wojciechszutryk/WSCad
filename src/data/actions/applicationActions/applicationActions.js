import {
    SET_DRAWING,
    SET_SHEET_HEIGHT, SET_SHEET_OFFSET_X,
    SET_SHEET_OFFSET_Y,
    SET_SHEET_WIDTH,
    THEME_TOGGLE,
    TOGGLE_INDICATOR,
    TOGGLE_ORIENTATION
} from "../../constants";

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

export const setSheetOffsetY = offset => {
    return{
        type: SET_SHEET_OFFSET_Y,
        payload: offset
    }
};

export const setSheetOffsetX = offset => {
    return{
        type: SET_SHEET_OFFSET_X,
        payload: offset
    }
};

export const setIndicator = (indicator) => {
    return{
        type: TOGGLE_INDICATOR,
        payload: indicator
    }
};

export const toggleOrientation = () => {
    return{
        type: TOGGLE_ORIENTATION,
    }
};