import {

} from '../../constants';

export const addLine = id => {
    return{
        type: BUDGET_ACTIVE_CATEGORIES_ADD,
        payload: id
    }
};

export const addPolyLine = id => {
    return{
        type: BUDGET_ACTIVE_CATEGORIES_ADD,
        payload: id
    }
};

export const removeActiveCategory = id => {
    return{
        type: BUDGET_ACTIVE_CATEGORIES_REMOVE,
        payload: id
    }
};
