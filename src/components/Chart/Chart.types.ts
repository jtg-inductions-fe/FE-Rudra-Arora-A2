export type ChartProps<T, Z> = {
    data: {
        xAxis: T;
        yAxis: Z;
    }[];
    tooltipName: string;
    xAxisTickFormatter: (value: T) => string;
    yAxisTickFormatter: (value: Z) => string;
    formatTooltipLabel: (xAxisData: T) => string;
    formatTooltipValue: (value: string, tooltipName: string) => string[];
};
