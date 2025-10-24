import { TransactionDataType } from '@data';

/**
 * Function for label formatting in transaction table
 * @param status
 * @param amount
 * @returns string
 */
export const labelFormatter = (status: string, amount: number): string =>
    `${status === 'Cancelled' ? 'Payment failed from' : amount < 0 ? 'Payment refund to' : 'Payment from'}`;

/**
 * Function for date formatting in transaction table
 * @param date
 * @returns string
 */
export const dateFormatter = (date: Date): string =>
    `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`;

/**
 * Function to shape data in desired form
 * @param data
 */
export const getData = (data: TransactionDataType[] | null) =>
    data?.map((item) => ({
        label: labelFormatter(item.status, item.amount),
        date: dateFormatter(new Date(item.date)),
        amount: `${item.amount < 0 ? '-' : ''}$${Math.abs(item.amount)}`,
        status: item.status,
    }));
