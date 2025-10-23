import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { Box, useMediaQuery, useTheme } from '@mui/material';

import skeleton from '@assets/images/skeleton_chart.webp';

import { ChartProps } from './Chart.types';

export const Chart = ({
    chartData,
    loadingChartData,
    xAxisTickFormatter,
    yAxisTickFormatter,
}: ChartProps) => {
    const theme = useTheme();

    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <ResponsiveContainer width="100%" height={420}>
            {!loadingChartData ? (
                <LineChart data={chartData} margin={{ bottom: 25 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="date"
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
                        formatter={(value: string, name: string) => [
                            `${(Number(value) / 1000).toFixed(0)}K`,
                            name,
                        ]}
                        labelFormatter={(_, payload) => {
                            const date = (
                                payload?.[0]?.payload as { date: Date }
                            ).date;
                            return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}, ${date.getFullYear()}`;
                        }}
                        contentStyle={{
                            borderRadius: 12,
                            boxShadow: theme.shadows[1],
                        }}
                        labelStyle={{
                            color: theme.palette.text.secondary,
                            fontSize: theme.typography.pxToRem(12),
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="sales"
                        stroke={theme.palette.primary.main}
                        strokeWidth={2}
                    />
                </LineChart>
            ) : (
                <Box component="img" src={skeleton} width={'100%'} />
            )}
        </ResponsiveContainer>
    );
};
