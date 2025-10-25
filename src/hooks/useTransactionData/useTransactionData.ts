import { TransactionData, TransactionDataType } from '@data';

import { useDataReducer } from '../useDataReducer';

export const useTransactionData = () => {
    const state = useDataReducer<TransactionDataType[]>(TransactionData);

    return state;
};
