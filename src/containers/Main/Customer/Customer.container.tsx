import { Stack, useTheme } from '@mui/material';

import { ReusableTable } from '@components';

export const Customer = () => {
    const theme = useTheme();

    return (
        <Stack
            flex={1}
            sx={{
                ...theme.mixins.BoxStyle(theme.typography.pxToRem(16)),

                [theme.breakpoints.up('md')]: {
                    ...theme.mixins.BoxStyle(theme.typography.pxToRem(24)),
                },
            }}
        >
            <ReusableTable />
        </Stack>
    );
};
