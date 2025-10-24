import { Tooltip, Typography as MuiTypography, useTheme } from '@mui/material';

import { CustomTypographyProps } from './Typography.types';

export const Typography = ({
    color,
    variant,
    linesToClamp,
    textAlign,
    component,
    children,
    tooltip = false,
}: CustomTypographyProps) => {
    const theme = useTheme();

    const typographyElement = (
        <MuiTypography
            {...(component && { component })}
            sx={{ ...(linesToClamp && theme.mixins.lineClamp(linesToClamp)) }}
            variant={variant}
            color={color}
            textAlign={textAlign}
        >
            {children}
        </MuiTypography>
    );

    if (tooltip) {
        return (
            <Tooltip title={children} arrow placement="top-start">
                {typographyElement}
            </Tooltip>
        );
    }

    return typographyElement;
};
