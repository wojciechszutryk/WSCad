import {
    CIRCLE_ADD,
    CIRCLE_DELETE, CURVE_ADD, CURVE_DELETE, IMAGE_ADD, IMAGE_DELETE,
    LINE_ADD, LINE_DELETE, RECT_ADD, RECT_DELETE, TEXT_ADD, TEXT_DELETE,
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

export const addCurve = curve => {
    return{
        type: CURVE_ADD,
        payload: curve
    }
};

export const addText = text => {
    return{
        type: TEXT_ADD,
        payload: text
    }
};

export const addImage = image => {
    return{
        type: IMAGE_ADD,
        payload: image
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

export const deleteCurve = id => {
    return{
        type: CURVE_DELETE,
        payload: id
    }
};

export const deleteText = id => {
    return{
        type: TEXT_DELETE,
        payload: id
    }
};

export const deleteImage = id => {
    return{
        type: IMAGE_DELETE,
        payload: id
    }
};
