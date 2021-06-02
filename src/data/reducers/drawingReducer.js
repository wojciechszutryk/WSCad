import {CIRCLE_ADD, CIRCLE_DELETE, LINE_ADD, LINE_DELETE, RECT_ADD, RECT_DELETE} from "../constants";

const startElements = {
    lines: [],
    circles: [],
    rects: [],
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
        default:
            return state;
    }
}

export default elements;