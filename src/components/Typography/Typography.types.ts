import { TypographyProps } from '@mui/material';

export type CustomTypographyProps = Pick<
    TypographyProps,
    | 'variant'
    | 'color'
    | 'textAlign'
    | 'component'
    | 'children'
    | 'noWrap'
    | 'flexShrink'
    | 'marginLeft'
> & {
    showTooltip?: boolean;
    linesToClamp?: number;
};
