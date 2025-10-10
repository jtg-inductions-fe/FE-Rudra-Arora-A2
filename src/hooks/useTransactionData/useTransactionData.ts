import { TransactionData, TransactionType } from '@data';

import { useDataReducer } from '../useDataReducer';

export const useTransactionData = () => {
    const state = useDataReducer<TransactionType[]>(TransactionData);

    return state;
};
