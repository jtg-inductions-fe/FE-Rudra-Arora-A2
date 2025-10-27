import { TooltipProps } from 'recharts';

export type CustomTooltipPayload<T> = {
    xAxis: T;
    yAxis: number;
};

export type CustomTooltipProps<T> = TooltipProps<number, string> & {
    payload?: {
        value: number | string;
        name: string;
        payload: CustomTooltipPayload<T>;
    }[];
    /**
     * Format date label for Recharts tooltip
     * @param xAxisData - The current data point on the X-axis
     * @returns A formatted string
     */
    formatTooltipLabel: (xAxisData: T) => string;
    /**
     * Format the tooltip value
     * @param value - Value in the tooltip
     * @param tooltipName - The label to be displayed alongside tooltip
     * @returns A string array with formatted value and the tooltio label
     */
    formatTooltipValue: (value: string, tooltipName: string) => string[];
    /**
     * Name of the tooltip to be visible in the chart
     */
    tooltipName?: string;
};
