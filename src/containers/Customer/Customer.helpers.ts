import { CustomerDataType } from '@data';

/**
 * Function to shape Customer data in desired form
 * @param data - An array of customers data objects or null
 */
export const getData = (data: CustomerDataType[] | null) =>
    data?.map((item) => ({
        label: item.customerName,
        caption: item.customerEmail,
        value: item.customerAmount,
        avatar: item.customerImage,
    }));
