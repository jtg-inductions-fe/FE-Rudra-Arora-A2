import { TooltipProps } from 'recharts';

export type CustomTooltipPayload<T> = {
    xAxis: T;
    yAxis: number;
};

export type CustomTooltipProps<T> = TooltipProps<number, string> & {
    payload?: {
        color?: string;
        value: number | string;
        name: string;
        payload: CustomTooltipPayload<T>;
    }[];
    formatTooltipLabel: (xAxisData: T) => string;
    formatTooltipValue: (value: string, tooltipName: string) => string[];
    tooltipName?: string;
};
