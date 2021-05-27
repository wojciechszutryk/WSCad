import {
    LINE_ADD,
    POLYLINE_ADD

} from '../../constants';

export const addLine = line => {
    return{
        type: LINE_ADD,
        payload: line
    }
};

export const addPolyLine = polyLine => {
    return{
        type: POLYLINE_ADD,
        payload: polyLine
    }
};
