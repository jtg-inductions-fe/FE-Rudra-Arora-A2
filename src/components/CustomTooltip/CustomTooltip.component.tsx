import { Box, Typography, useTheme } from '@mui/material';

import { CustomTooltipProps } from './CustomTooltip.types';

export const CustomTooltip = <T,>({
    active,
    payload,
    formatTooltipLabel,
    formatTooltipValue,
    tooltipName = '',
}: CustomTooltipProps<T>) => {
    const theme = useTheme();

    if (!active || !payload || !payload.length) return null;

    const { xAxis, yAxis } = payload[0].payload;

    const formattedDate = formatTooltipLabel(xAxis);
    const [formattedValue, label] = formatTooltipValue(
        String(yAxis),
        tooltipName,
    );

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: theme.typography.pxToRem(10),
                boxShadow: theme.shadows[1],
                p: theme.spacing(2, 6, 8, 3),
            }}
        >
            <Typography
                variant="body2"
                sx={{
                    color: theme.palette.text.secondary,
                    fontSize: theme.typography.pxToRem(12),
                }}
            >
                {formattedDate}
            </Typography>

            <Box display="flex" alignItems="center" gap={1}>
                <Box
                    sx={{
                        width: theme.typography.pxToRem(8),
                        height: theme.typography.pxToRem(8),
                        borderRadius: '50%',
                        backgroundColor: theme.palette.primary.main,
                    }}
                />
                <Typography
                    variant="body2"
                    sx={{
                        color: theme.palette.text.secondary,
                    }}
                >
                    {label}:{' '}
                    <Typography
                        component="span"
                        sx={{
                            color: theme.palette.text.primary,
                            fontWeight: 600,
                        }}
                    >
                        {formattedValue}
                    </Typography>
                </Typography>
            </Box>
        </Box>
    );
};
