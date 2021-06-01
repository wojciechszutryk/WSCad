import {LINE_ADD, LINE_DELETE} from "../constants";

const startElements = {
    lines: [],
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
        case LINE_DELETE:
            return {
                ...state,
                lines: state.lines.filter(line => line.id !== action.payload),
            }
        default:
            return state;
    }
}

export default elements;