import { BoxProps, Stack, styled } from '@mui/material';

export const TransactionStack = styled(Stack)<BoxProps>(({ theme }) => ({
    ...theme.mixins.SectionContainerStyles(theme.spacing(4)),
    minHeight: theme.typography.pxToRem(600),
    [theme.breakpoints.up('xs')]: {
        minHeight: theme.typography.pxToRem(480),
    },
}));
