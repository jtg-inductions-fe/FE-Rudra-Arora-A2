import { SalesDataType } from '@data';

/**
 * Format date label for Recharts tooltip
 * @param xAxisData - The current data point on the X-axis
 * @returns A formatted string
 */
export const formatTooltipLabel = (xAxisData: Date): string => {
    const date = xAxisData;

    if (!(date instanceof Date)) return '';

    return `${date.getDate()} ${date.toLocaleString('default', {
        month: 'short',
    })}, ${date.getFullYear()}`;
};

/**
 * Format the tooltip value
 * @param value - Raw numeric value in the tooltip
 * @param tooltipName - The label to be displayed alongside tooltip
 * @returns A string array with formatted value and the tooltio label
 */
export const formatTooltipValue = (
    value: string,
    tooltipName: string,
): string[] => [`$${(Number(value) / 1000).toFixed(0)}k`, tooltipName];

/**
 * Function to shape data in desired form
 * @param data - An array of sales data objects or null
 */
export const getData = (data: SalesDataType[] | null) =>
    data?.map((item) => ({
        xAxis: new Date(item.date),
        yAxis: item.sales,
    }));

/**
 * Function to format xAxis ticks
 * @param value - The date value on the xAxis of the chart
 * @returns A formatted date string
 */
export const xAxisTickFormatter = (value: Date): string =>
    `${value.getDate()} ${value.toLocaleString('default', { month: 'short' })}`;

/**
 * Function to format yAxis ticks
 * @param value - The numeric value on the yAxis of the chart
 * @returns A formatted numeric value string
 */
export const yAxisTickFormatter = (value: number): string =>
    `${(value / 1000).toFixed(0)}K`;
