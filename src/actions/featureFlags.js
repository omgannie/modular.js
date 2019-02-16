import { ADD_FEATURE_FLAG, FETCH_ALL_FLAGS, TOGGLE_FEATURE_FLAG } from "./actionTypes";
import { isLoading, isNotLoading } from "./global";

export function addFeatureFlag(dispatch, payload) {
    dispatch(isLoading());
    dispatch({ type: ADD_FEATURE_FLAG, payload });
    dispatch(isNotLoading());
}

export function fetchFeatureFlags(dispatch, payload) {
    dispatch(isLoading());
    dispatch({ type: FETCH_ALL_FLAGS, payload });

}

export function toggleFeatureFlag(payload) {
    return {
        type: TOGGLE_FEATURE_FLAG,
        payload
    }
}
