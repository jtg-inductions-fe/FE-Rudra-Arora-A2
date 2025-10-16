import { ChartDataType } from '@data';

export type ChartProps = {
    chartData: ChartDataType[];
    months: string[];
    loadingChartData: boolean;
};
