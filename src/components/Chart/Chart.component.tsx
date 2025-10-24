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
                    formatter={(value: string) =>
                        formatTooltipValue(value, tooltipName)
                    }
                    labelFormatter={(_, payload) => {
                        const { xAxis } = payload[0].payload as { xAxis: T };
                        return formatTooltipLabel(xAxis);
                    }}
                    contentStyle={{
                        borderRadius: 12,
                        boxShadow: theme.shadows[1],
                    }}
                    itemStyle={{
                        color: theme.palette.text.primary,
                    }}
                    labelStyle={{
                        color: theme.palette.text.secondary,
                        fontSize: theme.typography.pxToRem(12),
                    }}
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
