import { Stack, Typography, useTheme } from '@mui/material';

import { Chart } from '@components';
import { useSalesData } from '@hooks';

export const Sales = () => {
    const theme = useTheme();
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    const response = useSalesData();
    const salesData = response.data ?? [];
    const loadingSalesData = response.loading;

    return (
        <Stack
            sx={{
                ...theme.mixins.BoxStyle(8),
                gap: theme.spacing(7),
            }}
        >
            <Typography variant="h2">Sales</Typography>
            <Chart
                months={months}
                chartData={salesData}
                loadingChartData={loadingSalesData}
            />
        </Stack>
    );
};
