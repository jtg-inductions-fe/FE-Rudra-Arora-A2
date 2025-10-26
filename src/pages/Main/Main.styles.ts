import { BoxProps, Stack, styled } from '@mui/material';

export const StyledStack = styled(Stack)<BoxProps>(({ theme }) => ({
    gap: theme.spacing(4),
    [theme.breakpoints.up('lg')]: {
        maxWidth: theme.typography.pxToRem(1320),
        margin: 'auto',
        width: '100%',
    },
}));

export const CustomerProductStack = styled(Stack)<BoxProps>(({ theme }) => ({
    gap: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },
}));
