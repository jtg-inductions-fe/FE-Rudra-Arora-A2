import { CustomerData, CustomerType } from '@data';

import { useDataReducer } from '../useDataReducer';

export const useCustomerData = () => {
    const state = useDataReducer<CustomerType[]>(CustomerData);

    return state;
};
