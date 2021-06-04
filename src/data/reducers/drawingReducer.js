import {
    CIRCLE_ADD,
    CIRCLE_DELETE,
    CURVE_ADD,
    CURVE_DELETE, IMAGE_ADD, IMAGE_DELETE,
    LINE_ADD,
    LINE_DELETE,
    RECT_ADD,
    RECT_DELETE, TEXT_ADD, TEXT_DELETE
} from "../constants";

const startElements = {
    lines: [],
    circles: [],
    rects: [],
    curves: [],
    texts: [],
    images: [],
}

const elements = (state= startElements, action) => {
    switch (action.type) {
        case LINE_ADD:
            return {
                ...state,
                lines: [
                    action.payload,
                    ...state.lines,
                ]
            }
        case CIRCLE_ADD:
            return {
                ...state,
                circles: [
                    action.payload,
                    ...state.circles,
                ]
            }
        case RECT_ADD:
            return {
                ...state,
                rects: [
                    action.payload,
                    ...state.rects,
                ]
            }
        case CURVE_ADD:
            return {
                ...state,
                curves: [
                    action.payload,
                    ...state.curves,
                ]
            }
        case TEXT_ADD:
            return {
                ...state,
                texts: [
                    action.payload,
                    ...state.texts,
                ]
            }
        case IMAGE_ADD:
            return {
                ...state,
                images: [
                    action.payload,
                    ...state.images,
                ]
            }
        case LINE_DELETE:
            return {
                ...state,
                lines: state.lines.filter(line => line.id !== action.payload),
            }
        case CIRCLE_DELETE:
            return {
                ...state,
                circles: state.circles.filter(circle => circle.id !== action.payload),
            }
        case RECT_DELETE:
            return {
                ...state,
                rects: state.rects.filter(rect => rect.id !== action.payload),
            }
        case CURVE_DELETE:
            return {
                ...state,
                curves: state.curves.filter(curve => curve.id !== action.payload),
            }
        case TEXT_DELETE:
            return {
                ...state,
                texts: state.texts.filter(text => text.id !== action.payload),
            }
        case IMAGE_DELETE:
            return {
                ...state,
                images: state.images.filter(image => image.id !== action.payload),
            }
        default:
            return state;
    }
}

export default elements;