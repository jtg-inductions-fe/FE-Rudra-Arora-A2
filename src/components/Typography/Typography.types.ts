import { TypographyProps } from '@mui/material';

export type CustomTypographyProps = Pick<
    TypographyProps,
    'variant' | 'color' | 'textAlign' | 'component' | 'children' | 'noWrap'
> & {
    showTooltip?: boolean;
    linesToClamp?: number;
};
