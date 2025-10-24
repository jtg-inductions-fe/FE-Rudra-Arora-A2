import { ProductsDataType } from '@data';

/**
 * Function to shape Products data in desired form
 * @param data - An array of products data objects or null
 */
export const getData = (data: ProductsDataType[] | null) =>
    data?.map((item) => ({
        label: item.productName,
        caption: item.technologyStack,
        value: item.sales,
    }));
