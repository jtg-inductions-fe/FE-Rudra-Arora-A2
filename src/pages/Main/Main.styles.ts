import { Stack, styled } from '@mui/material';

export const StyledStack = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        maxWidth: theme.typography.pxToRem(1320),
        margin: 'auto',
        width: '100%',
        gap: theme.spacing(4),
    },
}));

export const CustomerProductStack = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        gap: theme.spacing(4),
    },
}));
