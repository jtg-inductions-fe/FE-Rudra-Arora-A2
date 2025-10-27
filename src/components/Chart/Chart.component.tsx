import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { useMediaQuery, useTheme } from '@mui/material';

import { ChartProps } from './Chart.types';
import { CustomTooltip } from '../CustomTooltip';

export const Chart = <T, Z>({
    data,
    tooltipName,
    xAxisTickFormatter,
    yAxisTickFormatter,
    formatTooltipLabel,
    formatTooltipValue,
}: ChartProps<T, Z>) => {
    const theme = useTheme();

    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <ResponsiveContainer width="100%" height={420}>
            <LineChart data={data} margin={{ bottom: 25 }}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="xAxis"
                    padding={{
                        left: isLargeScreen ? 60 : 20,
                        right: isLargeScreen ? 60 : 40,
                    }}
                    tickLine={false}
                    axisLine={false}
                    angle={isLargeScreen ? 0 : -40}
                    dy={20}
                    minTickGap={20}
                    tick={{
                        fontSize: isLargeScreen ? 14 : 12,
                        fontWeight: isLargeScreen ? 600 : 400,
                    }}
                    tickFormatter={xAxisTickFormatter}
                />
                <YAxis
                    dx={-12}
                    axisLine={false}
                    hide={isLargeScreen ? false : true}
                    tickLine={false}
                    tickFormatter={yAxisTickFormatter}
                />
                <Tooltip
                    content={
                        <CustomTooltip
                            formatTooltipLabel={formatTooltipLabel}
                            formatTooltipValue={formatTooltipValue}
                            tooltipName={tooltipName}
                        />
                    }
                />
                <Line
                    type="monotone"
                    dataKey="yAxis"
                    stroke={theme.palette.primary.main}
                    strokeWidth={2}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
