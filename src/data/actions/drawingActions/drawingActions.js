import {
    LINE_ADD, LINE_DELETE,
} from '../../constants';

export const addLine = line => {
    return{
        type: LINE_ADD,
        payload: line
    }
};

export const deleteLine = id => {
    console.log(id)
    return{
        type: LINE_DELETE,
        payload: id
    }
};
