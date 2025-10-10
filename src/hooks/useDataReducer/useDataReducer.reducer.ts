import type { ActionType, StateType } from './useDataReducer.types';

/**
 * A reducer function for returning various states by corresponding action type
 * @param state
 * @param action
 * @returns {StateType<T>}
 */

export const dataReducer = <T>(
    state: StateType<T>,
    action: ActionType<T>,
): StateType<T> => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
