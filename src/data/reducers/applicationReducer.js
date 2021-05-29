import {THEME_TOGGLE} from "../constants";

const startState = {
    darkTheme: true,
}

const application = (state= startState, action) => {
    switch (action.type) {
        case THEME_TOGGLE:
            return {
                ...state,
                darkTheme: !state.darkTheme
            }

        default:
            return state;
    }
}

export default application;