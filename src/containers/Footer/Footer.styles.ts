import { Stack, styled } from '@mui/material';

export const FooterStack = styled(Stack)(({ theme }) => ({
    ...theme.mixins.SectionContainerStyles(theme.typography.pxToRem(48)),
    mb: theme.typography.pxToRem(2),
    gap: theme.spacing(8),
    justifyContent: 'space-between',

    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
    },
}));
