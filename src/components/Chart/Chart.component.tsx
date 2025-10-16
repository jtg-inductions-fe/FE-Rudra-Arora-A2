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

export const Chart = ({ chartData, months, loadingChartData }: ChartProps) => {
    const theme = useTheme();

    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <ResponsiveContainer width="100%" height={420}>
            {!loadingChartData ? (
                <LineChart data={chartData} margin={{ bottom: 25 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="date"
                        padding={{ left: 60, right: 60 }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value: string) =>
                            `${value.slice(8, 10)} ${months[Number(value.slice(6, 7)) - 1]}`
                        }
                        angle={isLargeScreen ? 0 : -40}
                        dy={20}
                        minTickGap={20}
                    />
                    <YAxis
                        dx={-12}
                        axisLine={false}
                        hide={isLargeScreen ? false : true}
                        tickLine={false}
                        tickFormatter={(value) =>
                            `${(value / 1000).toFixed(0)}K`
                        }
                    />
                    <Tooltip />
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
