import { CustomerData, CustomerDataType } from '@data';

import { useDataReducer } from '../useDataReducer';

export const useCustomerData = () => {
    const state = useDataReducer<CustomerDataType[]>(CustomerData);

    return state;
};
