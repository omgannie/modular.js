import {
    ADD_FEATURE_FLAG,
    TOGGLE_FEATURE_FLAG
} from "../actions/actionTypes";

const INITIAL_STATE = {
    user: undefined,
    featureFlags: {}
};

export default function(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ADD_FEATURE_FLAG: {
            return {
                ...state,
                ...state.featureFlags.push(...payload)
            }
        }
        break;
        case TOGGLE_FEATURE_FLAG: {

        }
        break;
        default: {
            return INITIAL_STATE;
        }
    }
}
