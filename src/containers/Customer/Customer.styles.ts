import { Stack, styled } from '@mui/material';

export const StyledStack = styled(Stack)(({ theme }) => ({
    ...theme.mixins.SectionContainerStyles(theme.typography.pxToRem(16)),
    maxHeight: theme.typography.pxToRem(450),
    flex: '2',
    gap: theme.spacing(4),
    minHeight: theme.typography.pxToRem(450),

    [theme.breakpoints.up('md')]: {
        ...theme.mixins.SectionContainerStyles(theme.typography.pxToRem(24)),
        width: theme.typography.pxToRem(500),
    },
}));
