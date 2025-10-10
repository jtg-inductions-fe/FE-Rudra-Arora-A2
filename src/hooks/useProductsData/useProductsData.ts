import { ProductsData, ProductsType } from '@data';

import { useDataReducer } from '../useDataReducer';

export const useProductsData = () => {
    const state = useDataReducer<ProductsType[]>(ProductsData);

    return state;
};
