import { Box, Chip, Stack, useTheme } from '@mui/material';

import TableSkeleton from '@assets/images/table-skeleton.webp';
import { ColumnType, Table, Typography } from '@components';
import { TransactionDataType } from '@data';
import { useTransactionData } from '@hooks';

import { dateFormatter, labelFormatter } from './Transaction.helpers';
import { TransactionStack } from './Transaction.styles';

export const Transaction = () => {
    const theme = useTheme();

    const TransactionResponse = useTransactionData();
    const TransactionData = TransactionResponse.data ?? [];

    const isDataLoading = TransactionResponse.loading;
    const isDataEmpty = !isDataLoading && TransactionData.length === 0;

    const columns: ColumnType<TransactionDataType>[] = [
        {
            key: 'personName',
            label: 'TRANSACTION',
            render: (row) => (
                <Box
                    sx={{
                        ...theme.mixins.flex('flex-start', 'stretch', 0),
                        ...theme.mixins.lineClamp(2),
                    }}
                >
                    <Typography variant="subtitle2" component={'span'}>
                        {labelFormatter(row.status, row.amount)}
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        component={'span'}
                        showTooltip
                    >
                        {' '}
                        {row.personName}
                    </Typography>
                </Box>
            ),
        },
        {
            key: 'date',
            label: 'DATE & TIME',
            render: (row) => (
                <Typography variant="body2" color="text.secondary">
                    {dateFormatter(new Date(row.date))}
                </Typography>
            ),
        },
        {
            key: 'amount',
            label: 'AMOUNT',
            render: (row) => (
                <Typography variant="body2">
                    {`${row.amount < 0 ? '-' : ''}$${Math.abs(row.amount)}`}
                </Typography>
            ),
        },
        {
            key: 'status',
            label: 'STATUS',
            render: (row) => (
                <Chip
                    size="small"
                    sx={{
                        width: theme.typography.pxToRem(90),
                    }}
                    color={
                        row.status === 'Cancelled'
                            ? 'error'
                            : row.status === 'Completed'
                              ? 'success'
                              : 'info'
                    }
                    label={row.status}
                />
            ),
        },
    ];

    return (
        <TransactionStack component="section">
            <Stack pb={4}>
                <Typography variant="h2">Transactions</Typography>
                <Typography variant="body2" color="info.light">
                    This is a list of latest transactions.
                </Typography>
            </Stack>

            {isDataLoading && (
                <Box
                    component="img"
                    src={TableSkeleton}
                    width="100%"
                    height="100%"
                />
            )}
            {!isDataLoading && isDataEmpty && (
                <Stack sx={{ ...theme.mixins.flexCenter() }} height="100%">
                    <Typography variant="h2" color="text.secondary">
                        No transaction data available
                    </Typography>
                </Stack>
            )}
            {!isDataLoading && !isDataEmpty && (
                <Table data={TransactionData} columns={columns} />
            )}
        </TransactionStack>
    );
};
