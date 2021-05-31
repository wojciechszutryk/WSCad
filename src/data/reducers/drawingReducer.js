import {LINE_ADD, POLYLINE_ADD} from "../constants";

const startElements = {
    lines: [],
    polyLines: [],
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
        case POLYLINE_ADD:
            return {
                ...state,
                polyLines: [
                    action.payload,
                    ...state.polyLines,
                ]
            }
        //
        // case BUDGET_SUCCESS:
        //     delete newLoading.BUDGET_REQUEST;
        //     return{
        //         ...state,
        //         budget: action.payload,
        //         loading: newLoading,
        //     }
        //
        // case BUDGET_FAILURE:
        //     delete newLoading.BUDGET_REQUEST;
        //     return{
        //         ...state,
        //         budget: {},
        //         loading: newLoading,
        //     }
        //
        // case BUDGET_ADD_REQUEST:
        //     return {
        //         ...state,
        //         loading: {
        //             ...state.loading,
        //             [action.type]: LOADING_STATES.LOADING,
        //         }
        //     }
        //
        // case BUDGET_ADD_SUCCESS:
        //     delete newLoading.BUDGET_ADD_REQUEST;
        //     return{
        //         ...state,
        //         budget: {
        //             ...state.budget,
        //             transactions: [
        //                 action.payload,
        //                 ...state.budget.transactions,
        //             ]
        //         },
        //         loading: newLoading,
        //     }
        //
        // case BUDGET_ADD_FAILURE:
        //     delete newLoading.BUDGET_ADD_REQUEST;
        //     return{
        //         ...state,
        //         budget: {},
        //         loading: newLoading,
        //     }
        //
        // case BUDGET_CATEGORIES_ADD_REQUEST:
        //     return {
        //         ...state,
        //         loading: {
        //             ...state.loading,
        //             [action.type]: LOADING_STATES.LOADING,
        //         }
        //     }
        //
        // case BUDGET_CATEGORIES_ADD_SUCCESS:
        //     delete newLoading.BUDGET_CATEGORIES_ADD_REQUEST;
        //     return{
        //         ...state,
        //         budget: {
        //             ...state.budget,
        //             categories: [
        //                 action.payload,
        //                 ...state.budget.categories,
        //             ]
        //         },
        //         loading: newLoading,
        //     }
        //
        // case BUDGET_CATEGORIES_ADD_FAILURE:
        //     delete newLoading.BUDGET_CATEGORIES_ADD_REQUEST;
        //     return{
        //         ...state,
        //         loading: newLoading,
        //     }
        //
        // case BUDGET_CATEGORIES_REQUEST:
        //     return {
        //         ...state,
        //         loading: {
        //             ...state.loading,
        //             [action.type]: LOADING_STATES.LOADING,
        //         }
        //     }
        //
        // case BUDGET_CATEGORIES_SUCCESS:
        //     delete newLoading.BUDGET_CATEGORIES_REQUEST;
        //     return{
        //         ...state,
        //         categories: action.payload,
        //         loading: newLoading,
        //     }
        //
        // case BUDGET_CATEGORIES_FAILURE:
        //     delete newLoading.BUDGET_CATEGORIES_REQUEST;
        //     return{
        //         ...state,
        //         categories: [],
        //         loading: newLoading,
        //     }
        //
        // case BUDGET_ACTIVE_CATEGORIES_ADD:
        //     if (newActiveCategories.includes(action.payload)) return {...state}
        //     return{
        //         ...state,
        //         activeCategories: [
        //             ...state.activeCategories,
        //             action.payload
        //         ]
        //     }
        //
        // case BUDGET_ACTIVE_CATEGORIES_REMOVE:
        //     const index = newActiveCategories.indexOf(action.payload);
        //     newActiveCategories.splice(index, 1);
        //     return{
        //         ...state,
        //         activeCategories: newActiveCategories
        //     }
        //
        // case BUDGET_ACTIVE_CATEGORIES_CLEAN:
        //     return{
        //         ...state,
        //         activeCategories: []
        //     }
        //
        // case BUDGET_TRANSACTION_ADD_REQUEST:
        //     return {
        //         ...state,
        //         loading: {
        //             ...state.loading,
        //             [action.type]: LOADING_STATES.LOADING,
        //         }
        //     }
        //
        // case BUDGET_TRANSACTION_ADD_SUCCESS:
        //     delete newLoading.BUDGET_TRANSACTION_ADD_REQUEST;
        //     return{
        //         ...state,
        //         budget: {
        //             ...state.budget,
        //             transactions: [
        //                 action.payload,
        //                 ...state.budget.transactions,
        //             ]
        //         },
        //         loading: newLoading,
        //     }
        //
        // case BUDGET_TRANSACTION_REMOVE_REQUEST:
        //     return {
        //         ...state,
        //         loading: {
        //             ...state.loading,
        //             [action.type]: LOADING_STATES.LOADING,
        //         }
        //     }
        //
        // case BUDGET_TRANSACTION_REMOVE_SUCCESS:
        //     const transactionIndex = newTransactions.find(transaction => transaction.id === action.payload.id);
        //     delete newLoading.BUDGET_TRANSACTION_REMOVE_REQUEST;
        //     newTransactions.splice(transactionIndex, 1);
        //     return {
        //         ...state,
        //         budget: {
        //             ...state.budget,
        //             transactions: newTransactions
        //         },
        //         loading: newLoading,
        //     }

        default:
            return state;
    }
}

export default elements;