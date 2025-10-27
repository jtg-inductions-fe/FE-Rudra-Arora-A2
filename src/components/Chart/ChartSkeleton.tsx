import { Box, useTheme } from '@mui/material';

import { LineSkeleton, XAxisBox, YAxisBox } from './Chart.styles';

export const ChartSkeleton = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: theme.typography.pxToRem(450),
            }}
        >
            <YAxisBox />
            <XAxisBox />
            <LineSkeleton />
        </Box>
    );
};
