import { Tooltip, Typography as MuiTypography, useTheme } from '@mui/material';

import { CustomTypographyProps } from './Typography.types';

export const Typography = ({
    linesToClamp,
    component,
    children,
    showTooltip = false,
    noWrap = false,
    ...rest
}: CustomTypographyProps) => {
    const theme = useTheme();

    const typographyElement = (
        <MuiTypography
            {...rest}
            {...(component && { component })}
            sx={{ ...(linesToClamp && theme.mixins.lineClamp(linesToClamp)) }}
            noWrap={noWrap}
        >
            {children}
        </MuiTypography>
    );

    if (showTooltip) {
        return (
            <Tooltip title={children} arrow placement="top-start">
                {typographyElement}
            </Tooltip>
        );
    }

    return typographyElement;
};
