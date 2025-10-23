import { ChartDataType } from '@data';

export type ChartProps = {
    chartData: ChartDataType[];
    loadingChartData: boolean;
    xAxisTickFormatter: (value: Date) => string;
    yAxisTickFormatter: (value: number) => string;
};
