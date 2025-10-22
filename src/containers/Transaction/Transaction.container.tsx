import { Box, Stack, Typography, useTheme } from '@mui/material';

import TableSkeleton from '@assets/images/table-skeleton.webp';
import { CustomTable } from '@components';
import { useTransactionData } from '@hooks';

export const Transaction = () => {
    const theme = useTheme();

    const labelFormatter = (
        name: string,
        status: string,
        amount: number,
    ): string =>
        `${status === 'Cancelled' ? 'Payment failed from' : amount < 0 ? 'Payment refund to' : 'Payment From'} ${name}`;

    const dateFormatter = (date: Date): string =>
        `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`;

    const TransactionResponse = useTransactionData();
    const TransactionData =
        TransactionResponse.data?.map((item) => ({
            label: labelFormatter(item.personName, item.status, item.amount),
            date: dateFormatter(item.date),
            amount: `${item.amount < 0 ? '-' : ''}$${Math.abs(item.amount)}`,
            status: item.status,
        })) ?? [];

    const CustomColumn = ['TRANSACTION', 'DATE & TIME', 'AMOUNT', 'STATUS'];

    return (
        <Stack
            sx={{
                ...theme.mixins.BoxStyle(4),
            }}
        >
            <Stack pb={4}>
                <Typography variant="h2">Transactions</Typography>
                <Typography variant="body2" color="info.light">
                    This is a list of latest transactions.
                </Typography>
            </Stack>

            {TransactionResponse.loading ? (
                <Box component="img" src={TableSkeleton} width={'100%'} />
            ) : (
                <CustomTable
                    data={TransactionData}
                    visibleColumn={CustomColumn}
                />
            )}
        </Stack>
    );
};
