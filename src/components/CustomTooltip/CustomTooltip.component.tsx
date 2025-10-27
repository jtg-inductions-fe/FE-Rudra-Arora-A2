import { Box, useTheme } from '@mui/material';

import { StyledBox } from './CustomTooltip.styles';
import { CustomTooltipProps } from './CustomTooltip.types';
import { Typography } from '../Typography';

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
        <StyledBox>
            <Typography
                variant="subtitle2"
                component="p"
                color={theme.palette.text.secondary}
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
                    color={theme.palette.text.secondary}
                >
                    {label}:
                    <Typography
                        component="span"
                        variant="h3"
                        color={theme.palette.text.primary}
                    >
                        {formattedValue}
                    </Typography>
                </Typography>
            </Box>
        </StyledBox>
    );
};
