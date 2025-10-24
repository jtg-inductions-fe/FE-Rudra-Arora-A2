import { ProductsData, ProductsDataType } from '@data';

import { useDataReducer } from '../useDataReducer';

export const useProductsData = () => {
    const state = useDataReducer<ProductsDataType[]>(ProductsData);

    return state;
};
