/**
 * Function for label formatting in transaction table
 * @param status The current Transaction status
 * @param amount The Transaction amount
 * @returns string
 */
export const labelFormatter = (status: string, amount: number): string => {
    if (status === 'Cancelled') {
        return 'Payment failed from ';
    }
    if (amount < 0) {
        return 'Payment refund to ';
    }
    return 'Payment from ';
};

/**
 * Function for date formatting in transaction table
 * @param date The date of the Transaction
 * @returns string
 */
export const dateFormatter = (date: Date): string =>
    `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`;
