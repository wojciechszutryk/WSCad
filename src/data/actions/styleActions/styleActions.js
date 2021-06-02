import {
    SET_COLOR, SET_FILL,
    SET_FONT_SIZE, SET_LINE_WIDTH, SET_PATTERN

} from '../../constants';

export const setFontSize = size => {
    return{
        type: SET_FONT_SIZE,
        payload: size
    }
};

export const setColor = color => {
    return{
        type: SET_COLOR,
        payload: color
    }
};

export const setFill = fill => {
    return{
        type: SET_FILL,
        payload: fill
    }
};

export const setPattern = pattern => {
    return{
        type: SET_PATTERN,
        payload: pattern
    }
};

export const setLineWidth = width => {
    return{
        type: SET_LINE_WIDTH,
        payload: width
    }
};