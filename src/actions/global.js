import { IS_LOADING, IS_NOT_LOADING } from "./actionTypes";

export function isLoading() {
    return {
        type: IS_LOADING
    }
}

export function isNotLoading() {
    return {
        type: IS_NOT_LOADING
    }
}
