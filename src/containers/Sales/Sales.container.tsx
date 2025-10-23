import InfoIcon from '@mui/icons-material/Info';
import { Box, Stack, Tooltip, Typography, useTheme } from '@mui/material';

import { Chart } from '@components';
import { useSalesData } from '@hooks';

export const Sales = () => {
    const theme = useTheme();
    const response = useSalesData();
    const salesData = response.data ?? [];
    const loadingSalesData = response.loading;

    const xAxisTickFormatter = (value: Date): string =>
        `${value.getDate()} ${value.toLocaleString('default', { month: 'short' })}`;

    const yAxisTickFormatter = (value: number) =>
        `${(value / 1000).toFixed(0)}K`;

    return (
        <Stack
            sx={{
                ...theme.mixins.BoxStyle(8),
                gap: theme.spacing(7),
            }}
        >
            <Box sx={{ ...theme.mixins.flex('flex-start', 'center', '3px') }}>
                <Typography variant="h2">Sales</Typography>
                <Tooltip title="Sales Statistics" arrow placement="right">
                    <InfoIcon color="action" />
                </Tooltip>
            </Box>
            <Chart
                chartData={salesData}
                loadingChartData={loadingSalesData}
                xAxisTickFormatter={xAxisTickFormatter}
                yAxisTickFormatter={yAxisTickFormatter}
            />
        </Stack>
    );
};
