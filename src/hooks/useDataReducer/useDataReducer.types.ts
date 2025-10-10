export interface StateType<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

export type ActionType<T> =
    | { type: 'FETCH_START' }
    | { type: 'FETCH_SUCCESS'; payload: T }
    | { type: 'FETCH_ERROR'; payload: Error };
