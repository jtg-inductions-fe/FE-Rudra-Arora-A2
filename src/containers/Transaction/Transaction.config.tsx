import { Box, Chip } from '@mui/material';

import { ColumnType, Typography } from '@components';
import { TransactionDataType } from '@data';
import { theme } from '@theme';

import { dateFormatter, labelFormatter } from './Transaction.helpers';

const STATUS_COLOR_MAP: Record<string, 'error' | 'success' | 'info'> = {
    Cancelled: 'error',
    Completed: 'success',
    Inprogress: 'info',
} as const;

export const columnConfig: ColumnType<TransactionDataType>[] = [
    {
        key: 'personName',
        label: 'TRANSACTION',
        columnWidth: 25,
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

                <Typography variant="subtitle1" component={'span'} showTooltip>
                    {row.personName}
                </Typography>
            </Box>
        ),
    },
    {
        key: 'date',
        label: 'DATE & TIME',
        columnWidth: 25,
        render: (row) => (
            <Typography variant="body2" color="text.secondary">
                {dateFormatter(new Date(row.date))}
            </Typography>
        ),
    },
    {
        key: 'amount',
        label: 'AMOUNT',
        columnWidth: 25,
        render: (row) => (
            <Typography variant="body2" showTooltip>
                {`${row.amount < 0 ? '-' : ''}$${Math.abs(row.amount)}`}
            </Typography>
        ),
    },
    {
        key: 'status',
        label: 'STATUS',
        columnWidth: 25,
        render: (row) => (
            <Chip
                size="small"
                sx={{
                    width: theme.typography.pxToRem(90),
                }}
                color={STATUS_COLOR_MAP[row.status.split(' ').join('')]}
                label={row.status}
            />
        ),
    },
];
