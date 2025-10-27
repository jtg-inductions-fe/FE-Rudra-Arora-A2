import InfoIcon from '@mui/icons-material/Info';
import { Box, Stack, Tooltip, useTheme } from '@mui/material';

import { Chart, ChartSkeleton, Typography } from '@components';
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
    const salesResponse = useSalesData();
    const salesData = getData(salesResponse.data) ?? [];
    const isDataLoading = salesResponse.loading;
    const isDataEmpty = !isDataLoading && salesData.length === 0;

    return (
        <Stack
            sx={{
                ...theme.mixins.SectionContainerStyles(8),
                gap: theme.spacing(7),
                minHeight: theme.typography.pxToRem(500),
            }}
            component="section"
        >
            <Box sx={{ ...theme.mixins.flex('flex-start', 'center', '3px') }}>
                <Typography variant="h2" linesToClamp={1}>
                    Sales
                </Typography>
                <Tooltip title="Sales Statistics" arrow placement="right">
                    <InfoIcon color="action" />
                </Tooltip>
            </Box>
            {isDataLoading && <ChartSkeleton />}
            {!isDataLoading && isDataEmpty && (
                <Stack sx={{ ...theme.mixins.flexCenter() }} height="100%">
                    <Typography variant="h2" color="text.secondary">
                        No Sales data available
                    </Typography>
                </Stack>
            )}
            {!isDataEmpty && !isDataLoading && (
                <Chart
                    data={salesData}
                    tooltipName="Sales"
                    xAxisTickFormatter={xAxisTickFormatter}
                    yAxisTickFormatter={yAxisTickFormatter}
                    formatTooltipLabel={formatTooltipLabel}
                    formatTooltipValue={formatTooltipValue}
                />
            )}
        </Stack>
    );
};
