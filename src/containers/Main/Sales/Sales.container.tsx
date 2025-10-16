import { Box, useTheme } from '@mui/material';

import { Chart } from '@components';

export const Sales = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                ...theme.mixins.BoxStyle(8),
            }}
        >
            <Chart />
        </Box>
    );
};
