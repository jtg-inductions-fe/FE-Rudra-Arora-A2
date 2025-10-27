import { Stack, useTheme } from '@mui/material';

import { Table, TableSkeleton, Typography } from '@components';
import { useTransactionData } from '@hooks';

import { columnConfig } from './Transaction.config';
import { TransactionStack } from './Transaction.styles';

export const Transaction = () => {
    const theme = useTheme();

    const TransactionResponse = useTransactionData();
    const TransactionData = TransactionResponse.data ?? [];

    const isDataLoading = TransactionResponse.loading;
    const isDataEmpty = !isDataLoading && TransactionData.length === 0;

    return (
        <TransactionStack component="section" aria-label="Transaction Section">
            <Stack pb={4}>
                <Typography variant="h2">Transactions</Typography>
                <Typography variant="body2" color="info.light">
                    This is a list of latest transactions.
                </Typography>
            </Stack>

            {isDataLoading && <TableSkeleton />}
            {!isDataLoading && isDataEmpty && (
                <Stack sx={{ ...theme.mixins.flexCenter() }} height="100%">
                    <Typography variant="h2" color="text.secondary">
                        No transaction data available
                    </Typography>
                </Stack>
            )}
            {!isDataLoading && !isDataEmpty && (
                <Table data={TransactionData} columns={columnConfig} />
            )}
        </TransactionStack>
    );
};
