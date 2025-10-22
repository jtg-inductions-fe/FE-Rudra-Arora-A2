import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

import TableSkeleton from '@assets/images/table-skeleton.webp';
import { CustomTable } from '@components';
import { useTransactionData } from '@hooks';

export const Transaction = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const labelFormatter = (status: string, amount: number): string =>
        `${status === 'Cancelled' ? 'Payment failed from' : amount < 0 ? 'Payment refund to' : 'Payment from'}`;

    const dateFormatter = (date: Date): string =>
        `${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`;

    const TransactionResponse = useTransactionData();
    const TransactionData =
        TransactionResponse.data?.map((item) => ({
            label: labelFormatter(item.status, item.amount),
            date: dateFormatter(item.date),
            amount: `${item.amount < 0 ? '-' : ''}$${Math.abs(item.amount)}`,
            status: item.status,
            name: item.personName,
        })) ?? [];

    const CustomColumn = ['TRANSACTION', 'DATE & TIME', 'AMOUNT', 'STATUS'];
    const visibleColumn = isDesktop ? CustomColumn : CustomColumn.slice(0, 2);

    return (
        <Stack
            sx={{
                ...theme.mixins.BoxStyle(4),
                maxHeight: isDesktop
                    ? theme.typography.pxToRem(500)
                    : theme.typography.pxToRem(600),
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
                    visibleColumn={visibleColumn}
                />
            )}
        </Stack>
    );
};
