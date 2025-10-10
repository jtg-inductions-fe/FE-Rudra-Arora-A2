import { useEffect, useReducer } from 'react';

import { dataReducer } from './useDataReducer.reducer';
import type { StateType } from './useDataReducer.types';

/**
 * Custom hook to show data fetching
 * @param staticData
 * @returns {StateType<T>} An object containing the data, loading and error
 */

export function useDataReducer<T>(staticData: T): StateType<T> {
    const initialState: StateType<T> = {
        data: null,
        loading: false,
        error: null,
    };

    const [state, dispatch] = useReducer(dataReducer<T>, initialState);

    useEffect(() => {
        if (!staticData) return;

        dispatch({ type: 'FETCH_START' });

        const timer = setTimeout(() => {
            try {
                dispatch({ type: 'FETCH_SUCCESS', payload: staticData });
            } catch (err) {
                const error =
                    err instanceof Error
                        ? err
                        : new Error('An unknown error occurred');
                dispatch({ type: 'FETCH_ERROR', payload: error });
            }
        }, 1500);

        return () => clearTimeout(timer);
    }, [staticData]);

    return state;
}
