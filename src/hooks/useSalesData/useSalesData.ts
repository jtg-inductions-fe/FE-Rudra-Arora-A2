import { SalesData, SalesDataType } from '@data';

import { useDataReducer } from '../useDataReducer';

export const useSalesData = () => {
    const state = useDataReducer<SalesDataType[]>(SalesData);

    return state;
};
