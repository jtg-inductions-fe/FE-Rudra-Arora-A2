import { Stack, Typography, useTheme } from '@mui/material';

import { CustomTable } from '@components';

export const Transaction = () => {
    const theme = useTheme();

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

            <CustomTable />
        </Stack>
    );
};
