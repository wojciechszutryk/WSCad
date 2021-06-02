import {
    CIRCLE_ADD,
    CIRCLE_DELETE,
    LINE_ADD, LINE_DELETE, RECT_ADD, RECT_DELETE,
} from '../../constants';

export const addLine = line => {
    return{
        type: LINE_ADD,
        payload: line
    }
};

export const addCircle = circle => {
    return{
        type: CIRCLE_ADD,
        payload: circle
    }
};

export const addRect = rect => {
    return{
        type: RECT_ADD,
        payload: rect
    }
};

export const deleteLine = id => {
    return{
        type: LINE_DELETE,
        payload: id
    }
};

export const deleteCircle = id => {
    return{
        type: CIRCLE_DELETE,
        payload: id
    }
};

export const deleteRect = id => {
    return{
        type: RECT_DELETE,
        payload: id
    }
};
