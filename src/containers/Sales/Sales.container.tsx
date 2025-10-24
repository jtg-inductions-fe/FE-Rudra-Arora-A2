import InfoIcon from '@mui/icons-material/Info';
import { Box, Stack, Tooltip, Typography, useTheme } from '@mui/material';

import skeleton from '@assets/images/skeleton_chart.webp';
import { Chart } from '@components';
import { useSalesData } from '@hooks';

import {
    formatTooltipLabel,
    formatTooltipValue,
    getData,
    xAxisTickFormatter,
    yAxisTickFormatter,
} from './Sales.helpers';

export const Sales = () => {
    const theme = useTheme();
    const salesData = getData(useSalesData().data);

    return (
        <Stack
            sx={{
                ...theme.mixins.SectionContainerStyles(8),
                gap: theme.spacing(7),
            }}
        >
            <Box sx={{ ...theme.mixins.flex('flex-start', 'center', '3px') }}>
                <Typography variant="h2">Sales</Typography>
                <Tooltip title="Sales Statistics" arrow placement="right">
                    <InfoIcon color="action" />
                </Tooltip>
            </Box>
            {salesData ? (
                <Chart
                    data={salesData}
                    tooltipName="Sales"
                    xAxisTickFormatter={xAxisTickFormatter}
                    yAxisTickFormatter={yAxisTickFormatter}
                    formatTooltipLabel={formatTooltipLabel}
                    formatTooltipValue={formatTooltipValue}
                />
            ) : (
                <Box component="img" src={skeleton} />
            )}
        </Stack>
    );
};
